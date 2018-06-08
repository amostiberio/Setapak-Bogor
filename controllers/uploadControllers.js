var uploadController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var async = require('async');
var token;


/*transaction status
	0 = Belum Di konfirmasi Pemandu
	1 =	Konfirmasi
	
	Kode Tipe
	HomestayPhoto
	JasaPhoto
	BarangPhoto
	BuktiPembayaranHomestay
	BuktiPembayaranJasa
	BuktiPembayaranBarang
	UserPhoto
	PemanduPhoto

*/
		
    
//Route : api/user/upload/buktipembayaran/homestay/:transaction_id
uploadController.buktiPembayaranHomestay = async (req, res) => {		        
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else if(!req.params.transaction_id){
    	 res.status(400).json({ status:false, message: 'Data Incomplete' });
    } else {  
        var token = req.headers.authorization
        //Validation JWT          
        jwt.verify(token, secret, function(err, decoded) {
          if(err) {
            return res.status(401).send({message: 'invalid_token'});
          }else{
          var user_id = decoded.user_id
            var transaction_id = req.params.transaction_id
              // var queryUser = 'SELECT * FROM user WHERE user_id = ?'
              var queryTransaksiHomestay = 'SELECT * FROM transaksi_homestay WHERE transaction_id = ?'
              var queryCheckUpload= 'SELECT * FROM pictures WHERE produk_id = ? AND user_id = ? AND kode_tipe = ?'
              // kode tipe buktiPembayaranHomestay
              var kode_tipe = 'BuktiPembayaranHomestay'

              var newNameUpload;
              var direktori = './public/uploads/buktipembayaran/homestay'

              //Destination storage
              var storage = multer.diskStorage({      
                destination: direktori,
                filename: function (req, file, callback) {
                  newNameUpload = file.fieldname + '-' + transaction_id + ".png"
                  callback(null, newNameUpload);
                }
              });

              // multer buat fungsi upload
              var upload = multer({ 
                  storage : storage,
                  fileFilter: function (req, file, callback) {
                    var ext = path.extname(file.originalname).toLowerCase();
                    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                        return callback(new Error('Only images are allowed'))
                    }
                    callback(null, true)
                  },
                  limits: {          
                    fileSize: 5 * 1024 * 1024 // mendefinisikan file size yang bisa diupload max 5 MB
                  } 
              }).single('BuktiPembayaranHomestay');

              //upload sesuai dengan pemandu_id      
              req.getConnection(function(err,connection){
                connection.query(queryTransaksiHomestay,[transaction_id],function(err,rows){ //get data Homestay 
                    if(err)
                         console.log("Error Selecting : %s ", err);
                      if(rows.length){
                          var transaction_status = rows[0].transaction_status
                          var user_idTransaksi = rows[0].user_id
                          if(user_idTransaksi != user_id){
                            res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
                          }else{
                            req.getConnection(function(err,connection){
                              connection.query(queryCheckUpload,[transaction_id,user_id,kode_tipe],function(err,rows){
                                  if(err)
                                  console.log("Error Selecting : %s ", err);  
                                  if(rows.length){
                                    //data Upload sudah pernah di upload
                                    //upload function
                                      upload(req, res, function(err) {
                                        if(err) {
                                          if (err.code == 'LIMIT_FILE_SIZE') {
                                            res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
                                          } else {
                                            res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
                                          }
                                        } else if (req.file == null || req.file == 0) {
                                          res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
                                        } else {
                                          var direktoriPhoto = direktori + newNameUpload
                                          var queryUpdatePicturesDirectory = 'UPDATE pictures SET directory = ? WHERE produk_id = ?';
                                          req.getConnection(function(err,connection){
                                            connection.query(queryUpdatePicturesDirectory,[direktoriPhoto,transaction_id],function(err,results){
                                                if(err)
                                                  console.log("Error Selecting : %s ", err);
                                                else if(results.length){
                                                  res.status(404).json({ message: 'Picture ID not Found' });
                                                }else if(transaction_status == 0){
                                                  var queryUpdateStatusKonfirmasi = "UPDATE transaksi_homestay SET transaction_status = ? WHERE transaction_id = ?"
                                                  req.getConnection(function(err,connection){
                                                    connection.query(queryUpdateStatusKonfirmasi,[1,transaction_id],function(err,rows){
                                                      if(err) console.log("Error Selecting : %s ", err);				
                                                      res.status(200).json({status: true , message: 'Sukses Update Photo Bukti Pembayaran Homestay' });					
                                                    });
                                                  });   
                                                }else{
                                                  res.status(200).json({status: true , message: 'Success Update Photo Bukti Pembayaran Homestay' });   
                                                }
                                            });
                                          });
                                        }
                                      });
                                  }else{//data Upload belum pernah di upload
                                    //upload function
                                    upload(req, res, function(err) {
                                      if(err) {
                                        if (err.code == 'LIMIT_FILE_SIZE') {
                                          res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
                                        } else {
                                          res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
                                        }
                                      } else if (req.file == null || req.file == 0) {
                                        res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
                                      } else {
                                        var direktoriPhoto = direktori + newNameUpload
                                        var queryInsertPicturesDirectory = 'INSERT INTO pictures SET produk_id = ?,user_id = ?, kode_tipe = ?, directory = ?';
                                        req.getConnection(function(err,connection){
                                          connection.query(queryInsertPicturesDirectory,[transaction_id,user_id,kode_tipe,direktoriPhoto],function(err,results){
                                              if(err)
                                                console.log("Error Selecting : %s ", err);
                                              else if(results.length){
                                                res.status(404).json({ message: 'Picture ID not Found' });
                                              }else if(transaction_status == 0){
                                                var queryUpdateStatusKonfirmasi = "UPDATE transaksi_homestay SET transaction_status = ? WHERE transaction_id = ?"
                                                req.getConnection(function(err,connection){
                                                  connection.query(queryUpdateStatusKonfirmasi,[1,transaction_id],function(err,rows){
                                                    if(err) console.log("Error Selecting : %s ", err);				
                                                    res.status(200).json({status: true , message: 'Sukses Upload Photo Bukti Pembayaran Homestay' });					
                                                  });
                                                });   
                                              }else{
                                                res.status(200).json({status: true , message: 'Success Upload Photo Bukti Pembayaran Homestay' });   
                                              }
                                          });
                                        });
                                      }
                                    });
                                  } 
                          });
                        }); 
                          }            
                      }else{
                        res.status(401).json({status:401,success:false,message:'Transaksi Tidak ditemukan'});
                      }
                });
              }); 
          }
        });
    }
}
   
//Route : api/user/upload/buktipembayaran/Jasa/:transaction_id
uploadController.buktiPembayaranJasa = async (req, res) => {		        
  if(!req.headers.authorization) {
      res.status(401).json({status: false, message: 'Please Login !'});
  } else if(!req.params.transaction_id){
     res.status(400).json({status: false, message: 'Data Incomplete'});
  } else {  
      var token = req.headers.authorization
      //Validation JWT          
      jwt.verify(token, secret, function(err, decoded) {
        if(err) {
          return res.status(401).send({message: 'invalid_token'});
        }else{
        var user_id = decoded.user_id
          var transaction_id = req.params.transaction_id
            // var queryUser = 'SELECT * FROM user WHERE user_id = ?'
            var queryTransaksiJasa = 'SELECT * FROM transaksi_jasa WHERE transaction_id = ?'
            var queryCheckUpload= 'SELECT * FROM pictures WHERE produk_id = ? AND user_id = ? AND kode_tipe = ?'
            // kode tipe buktiPembayaranHomestay
            var kode_tipe = 'BuktiPembayaranJasa'

            var newNameUpload;
            var direktori = './public/uploads/buktipembayaran/jasa'

            //Destination storage
            var storage = multer.diskStorage({      
              destination: direktori,
              filename: function (req, file, callback) {
                newNameUpload = file.fieldname + '-' + transaction_id + ".png"
                callback(null, newNameUpload);
              }
            });

            // multer buat fungsi upload
            var upload = multer({ 
                storage : storage,
                fileFilter: function (req, file, callback) {
                  var ext = path.extname(file.originalname).toLowerCase();
                  if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                      return callback(new Error('Only images are allowed'))
                  }
                  callback(null, true)
                },
                limits: {          
                  fileSize: 5 * 1024 * 1024 // mendefinisikan file size yang bisa diupload max 5 MB
                } 
            }).single('BuktiPembayaranJasa');

            //upload sesuai dengan pemandu_id      
            req.getConnection(function(err,connection){
              connection.query(queryTransaksiJasa,[transaction_id],function(err,rows){ //get data Homestay 
                  if(err)
                       console.log("Error Selecting : %s ", err);
                    if(rows.length){
                        var transaction_status = rows[0].transaction_status
                        var user_idTransaksi = rows[0].user_id
                        if(user_idTransaksi != user_id){
                          res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
                        }else{
                          req.getConnection(function(err,connection){
                            connection.query(queryCheckUpload,[transaction_id,user_id,kode_tipe],function(err,rows){
                                if(err)
                                console.log("Error Selecting : %s ", err);  
                                if(rows.length){
                                  //data Upload sudah pernah di upload
                                  //upload function
                                    upload(req, res, function(err) {
                                      if(err) {
                                        if (err.code == 'LIMIT_FILE_SIZE') {
                                          res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
                                        } else {
                                          res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
                                        }
                                      } else if (req.file == null || req.file == 0) {
                                        res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
                                      } else {
                                        var direktoriPhoto = direktori + newNameUpload
                                        var queryUpdatePicturesDirectory = 'UPDATE pictures SET directory = ? WHERE produk_id = ?';
                                        req.getConnection(function(err,connection){
                                          connection.query(queryUpdatePicturesDirectory,[direktoriPhoto,transaction_id],function(err,results){
                                              if(err)
                                                console.log("Error Selecting : %s ", err);
                                              else if(results.length){
                                                res.status(404).json({ message: 'Picture ID not Found' });
                                              }else if(transaction_status == 0){
                                                var queryUpdateStatusKonfirmasi = "UPDATE transaksi_jasa SET transaction_status = ? WHERE transaction_id = ?"
                                                req.getConnection(function(err,connection){
                                                  connection.query(queryUpdateStatusKonfirmasi,[1,transaction_id],function(err,rows){
                                                    if(err) console.log("Error Selecting : %s ", err);				
                                                    res.status(200).json({status: true , message: 'Sukses Update Photo Bukti Pembayaran Jasa' });					
                                                  });
                                                });   
                                              }else{
                                                res.status(200).json({status: true , message: 'Success Update Photo Bukti Pembayaran Jasa' });   
                                              }
                                          });
                                        });
                                      }
                                    });
                                }else{//data Upload belum pernah di upload
                                  //upload function
                                  upload(req, res, function(err) {
                                    if(err) {
                                      if (err.code == 'LIMIT_FILE_SIZE') {
                                        res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
                                      } else {
                                        res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
                                      }
                                    } else if (req.file == null || req.file == 0) {
                                      res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
                                    } else {
                                      var direktoriPhoto = direktori + newNameUpload
                                      var queryInsertPicturesDirectory = 'INSERT INTO pictures SET produk_id = ?,user_id = ?, kode_tipe = ?, directory = ?';
                                      req.getConnection(function(err,connection){
                                        connection.query(queryInsertPicturesDirectory,[transaction_id,user_id,kode_tipe,direktoriPhoto],function(err,results){
                                            if(err)
                                              console.log("Error Selecting : %s ", err);
                                            else if(results.length){
                                              res.status(404).json({ message: 'Picture ID not Found' });
                                            }else if(transaction_status == 0){
                                              var queryUpdateStatusKonfirmasi = "UPDATE transaksi_jasa SET transaction_status = ? WHERE transaction_id = ?"
                                              req.getConnection(function(err,connection){
                                                connection.query(queryUpdateStatusKonfirmasi,[1,transaction_id],function(err,rows){
                                                  if(err) console.log("Error Selecting : %s ", err);				
                                                  res.status(200).json({status: true , message: 'Sukses Upload Photo Bukti Pembayaran Jasa' });					
                                                });
                                              });   
                                            }else{
                                              res.status(200).json({status: true , message: 'Success Upload Photo Bukti Pembayaran Jasa' });   
                                            }
                                        });
                                      });
                                    }
                                  });
                                } 
                        });
                      }); 
                        }            
                    }else{
                      res.status(401).json({status:401,success:false,message:'Transaksi Tidak ditemukan'});
                    }
              });
            }); 
        }
      });
  }
}
//api/user/upload/userphoto
uploadController.userPhoto = async (req, res) => {        
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {
        var token = req.headers.authorization
        //Validation JWT          
        jwt.verify(token, secret, function(err, decoded) {
          if(err) {
            return res.status(401).send({message: 'invalid_token'});
          }else{
          var user_id = decoded.user_id
          var newNameUpload;
          var direktori = './public/uploads/userphoto/';

          //Destination storage
          var storage = multer.diskStorage({      
            destination: direktori,
            filename: function (req, file, callback) {
              newNameUpload = file.fieldname + '-' + user_id +'-'+ file.originalname
              callback(null, newNameUpload);
            }
          });

          // multer buat fungsi upload
          var upload = multer({ 
              storage : storage,
              fileFilter: function (req, file, callback) {
                var ext = path.extname(file.originalname).toLowerCase();
                if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                    return callback(new Error('Only images are allowed'))
                }
                callback(null, true)
              },
              limits: {          
                fileSize: 5 * 1024 * 1024 // mendefinisikan file size yang bisa diupload 5 MB
              } 
          }).single('UserPhoto');

          //upload function
          upload(req, res, function(err) {
            // console.log(err, 'Im in post , inside upload'+path);
            if(err) {
              if (err.code == 'LIMIT_FILE_SIZE') {
                res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
              } else {
                res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
              }
            } else if (req.file == null || req.file == 0) {
              res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
            } else {
              var direktoriPhoto = direktori + newNameUpload
              var queryUpdateUserPhoto = 'UPDATE user SET photo = ? WHERE user_id = ?';
              req.getConnection(function(err,connection){
                connection.query(queryUpdateUserPhoto,[direktoriPhoto,user_id],function(err,results){
                    if(err)
                      console.log("Error Selecting : %s ", err);
                    else if(results.length){
                      res.status(404).json({ message: 'User ID not Found' });
                    }
                    else{
                      res.status(200).json({status: true , message: 'Success Update Photo User' });   
                    }
                });
              });
            }
          });
        }
        });
      
    }
}

//api/user/upload/userphoto
uploadController.homestayMultiplePhoto = async (req, res) => {             
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {
          var token = req.headers.authorization
          //Validation JWT          
          jwt.verify(token, secret, function(err, decoded) {
          if(err) {
            return res.status(401).send({message: 'invalid_token'});
          }else{
          var user_id = decoded.user_id
          var homestay_id = req.params.homestay_id
          var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
          var queryHomestay = 'SELECT * FROM homestay WHERE homestay_id = ?'
          
          var newNameUpload;
          var direktori = './public/uploads/test/';
          var kode_tipe = 'HomestayPhoto'
          //Destination storage
          var storage = multer.diskStorage({      
            destination: direktori,
            filename: function (req, file, callback) {
              newNameUpload = file.fieldname + '-' + user_id + '-' + file.originalname + ".png"
              callback(null, newNameUpload);
            }
          });

          // multer buat fungsi upload
          var upload = multer({ 
              storage : storage,
              fileFilter: function (req, file, callback) {
                var ext = path.extname(file.originalname).toLowerCase();
                if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                    return callback(new Error('Only images are allowed'))
                }
                callback(null, true)
              },
              limits: {          
                fileSize: 5 * 1024 * 1024 // mendefinisikan file size yang bisa diupload 5 MB
              } 
          }).array('Homestay',3);
            
            //upload sesuai dengan pemandu_id      
          req.getConnection(function(err,connection){
            connection.query(queryPemandu,[user_id],function(err,rows){ //get data Homestay 
                if(err)
                     console.log("Error Selecting : %s ", err);
                if(rows.length){
                    var pemandu_id = rows[0].pemandu_id
                      req.getConnection(function(err,connection){
                        connection.query(queryHomestay,[homestay_id],function(err,rows){ //get data Homestay 
                        if(err)
                             console.log("Error Selecting : %s ", err);
                        if(rows.length){
                          if(pemandu_id == rows[0].pemandu_id) {
                            //upload function
                            upload(req, res, function(err) {
                              if(err) {
                                if (err.code == 'LIMIT_FILE_SIZE') {
                                  res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
                                } else {
                                  res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
                                }
                              } else {
                                // for(var i = 0 ; i <req.files.length;i++){
                                  var queryInsertUHomestayPhoto = 'INSERT INTO pictures produk_id = ?, user_id = ?, kode_tipe = ?, directory = ?';
                                //   var direktori = req.files.path
                                // }
                                
                                  async.forEachOf(req.files,function(i,inner_callback){
                                    connection.query(queryInsertUHomestayPhoto,[homestay_id,user_id,kode_tipe,req.files.path], function(err, rows, fields){
                                          if(!err){                                          
                                              inner_callback(null);
                                          } else {
                                              console.log("Error while performing Query");
                                              inner_callback(err);
                                          };
                                      });
                                  }, function(err){
                                      if(err){
                                        //handle the error if the query throws an error
                                        console.log("Error Selecting : %s ", err);
                                      }else{
                                        //whatever you wanna do after all the iterations are done
                                        res.status(200).json({status: true , message: 'Success Update Photo Homestay' }); 
                                      }
                                  });                    
                              }
                              });
                            } else {
                              res.status(400).json({status: false, message: 'Pemandu tidak memiliki akses ke data Homestay'});
                            }                                        
                        } else {                        
                          res.status(400).json({status: false, message: 'Homestay does not exists!'});
                        }
                    });
                  });              
              }
            });
          }); 

          }
        });
      
    }
}
module.exports = uploadController