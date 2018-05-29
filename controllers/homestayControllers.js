var homestayController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

// Get View Homestay Satu Pemandu //router = api/homestay/:homestay_id
homestayController.getOneHomestay = (req, res) => {
	var homestay_id = req.params.homestay_id
	var querySelectHomestay  = 'SELECT * FROM homestay WHERE homestay_id = ?'
	var querySelectPemandu  = 'SELECT * FROM pemandu WHERE pemandu_id = ?'
	var querySelectFasilitas = 'SELECT * FROM fasilitas WHERE fasilitas_id = ?';
	var querySelectAlamatCategory = 'SELECT * FROM alamatcategory WHERE alamatcategory_id = ?';
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectHomestay,[homestay_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var pemandu_id = rows[0].pemandu_id;
	            	var fasilitas_id = rows[0].fasilitas_id;
	            	var alamatcategory_id = rows[0].alamatcategory_id;
	            	var dataHomestay = rows[0]
	            	//res.json(dataHomestay)	            			
		            	req.getConnection(function(err,connection){
					    	connection.query(querySelectPemandu,[pemandu_id],function(err,pemandu){ //get data Homestay 
					    	  	if(err)
					               console.log("Error Selecting : %s ", err);
					            if(pemandu.length){
					             	var dataPemandu = pemandu[0]
					             	req.getConnection(function(err,connection){
								    	connection.query(querySelectFasilitas,[fasilitas_id],function(err,fasilitas){ //get data Homestay 
								    	  	if(err)
								               console.log("Error Selecting : %s ", err);
								            if(fasilitas.length){
								             	var dataFasilitas = fasilitas[0]
								             	req.getConnection(function(err,connection){
											    	connection.query(querySelectAlamatCategory,[alamatcategory_id],function(err,alamatCategory){ //get data Homestay 
											    	  	if(err)
											               console.log("Error Selecting : %s ", err);
											            if(alamatCategory.length){
											             	var dataAlamatCategory = alamatCategory[0]
											             	res.status(200).json({status: true, message: 'Select Homestay', dataHomestay, dataPemandu, dataFasilitas, dataAlamatCategory});					         
											            }
											    	});
											    });						         
								            }
								    	});
								    });					         
					            }
					    	});
					    });
	            }
	    	});
	    });
}

// Get All Homestay Satu Pemandu //router = api/homestay
homestayController.getPemanduHomestay = (req, res) => {
	var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id 	
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
    	var querySelectPemandu  = 'SELECT * FROM pemandu WHERE user_id = ?'
    	var querySelectHomestay  = 'SELECT * FROM homestay WHERE pemandu_id = ?'
    	var querySelectFasilitas = 'SELECT * FROM fasilitas WHERE fasilitas_id = ?';
    	var querySelectAlamatCategory = 'SELECT * FROM alamatcategory WHERE alamatcategory_id = ?';
	    
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectPemandu,[user_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var pemandu_id = rows[0].pemandu_id;
	            	req.getConnection(function(err,connection){
				    	connection.query(querySelectHomestay,[pemandu_id],function(err,rows){ //get data Homestay 
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){
				            	res.status(200).json({status: true, message: 'Select Homestay', data: rows});
					         //    	var objs = []
					         //    	for (var i = 0; i < rows.length; i++) {			
					         //    			var fasilitas_id = rows[i].fasilitas_id,
					         //    				alamatcategory_id = rows[i].alamatcategory_id				            						               		
					        //        		req.getConnection(function(err,connection){
				    					// 	connection.query(querySelectFasilitas,[rows[i].fasilitas_id],function(err,fasilitas){
				    					// 			if(err)
										   //             console.log("Error Selecting : %s ", err);
										   //          if(rows.length){
										   //          	objs.push({
									    //                    Homestay: rows[i].homestay_id,
									    //                    pemandu_id: rows[i].pemandu_id,
									    //                    //fasilitas_id: rows[i].fasilitas_id,
									    //                    fasilitas : fasilitas[i],
									    //                    alamatcategory_id: rows[i].alamatcategory_id,
									    //                    harga_perhari: rows[i].harga_perhari,
									    //                    deskripsi: rows[i].deskripsi,
									    //                    alamat: rows[i].alamat
								     //               		})	  
										   //          }  								
				    								
									    // 	});
									    // });
					                    
					        //        }
					        //        res.json(objs)
								
						
					               
				            }
				    	});
				    });
	            }
	    	});
	    });  
    }
}

// Add Homestay //route = api/homestay/add
homestayController.addHomestay = (req, res) => {
    var ac = req.body.ac,
        parking = req.body.parking,
        bathroom = req.body.bathroom,
        bedroom = req.body.bedroom,
        wifi = req.body.wifi   
    var nama_homestay = req.body.nama_homestay,
    	harga_perhari= req.body.harga_perhari,
    	deskripsi= req.body.deskripsi,
    	alamat= req.body.alamat,
    	provinsi = req.body.provinsi,
    	kabupaten = req.body.kabupaten,
    	kecamatan = req.body.kecamatan
    var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id 	
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {	
	    var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
	    var querySelectAlamatCategory = 'SELECT alamatcategory_id FROM alamatcategory WHERE provinsi = ? AND kabupaten = ? AND kecamatan = ?';
	    var queryCreateFasilitas = 'INSERT INTO fasilitas SET ac = ?, parking = ?, bathroom = ?, bedroom = ?, wifi =?';
	    var queryCreateHomestay = 'INSERT INTO homestay SET pemandu_id = ?,fasilitas_id=?,alamatcategory_id=?, nama_homestay = ?, harga_perhari = ?, deskripsi = ?, alamat = ?';
	    req.getConnection(function(err,connection){
	        connection.query(queryPemandu,[user_id],function(err,rows){	        	
	           if(err)
	               console.log("Error Selecting : %s ", err);
	           if(rows.length){
	           		var pemandu_id = rows[0].pemandu_id, 
	        			pemandu_status = rows[0].pemandu_status, 
	        			pemandu_verifikasi = rows[0].pemandu_verifikasi
	        			
	              if(!pemandu_status || !pemandu_verifikasi) {
	                  res.status(400).json({status: false, message: 'Status dan Verifikasi Pemandu belum di setujui'});
	              }else if(!nama_homestay || !harga_perhari ||!deskripsi||!alamat||!provinsi ||!kabupaten ||!kecamatan||!ac||!parking||!bathroom||!bedroom||!wifi){
	                  res.status(400).json({status: false, message: 'Data Incomplete'});
	              }else {
	              		req.getConnection(function(err,connection){
	                    connection.query(querySelectAlamatCategory,[provinsi,kabupaten,kecamatan],function(err,resultsAC){
		                    if(err){
		                        console.log("Error Selecting : %s ", err);
		                    } else { 	     
		                    	  var alamatcategory_id = resultsAC[0].alamatcategory_id
		                    	  req.getConnection(function(err,connection){
				                    connection.query(queryCreateFasilitas,[ac,parking,bathroom,bedroom,wifi],function(err,results){
					                    if(err){
					                        console.log("Error Selecting : %s ", err);
					                    } else { 	     
				                    	  	var fasilitas_id = results.insertId 
				                    	  	req.getConnection(function(err,connection){
						                    connection.query(queryCreateHomestay,[pemandu_id,fasilitas_id,alamatcategory_id,nama_homestay,harga_perhari,deskripsi,alamat],function(err,results){
							                    if(err){
							                        console.log("Error Selecting : %s ", err);
							                    } else { 	     
							                    	 res.status(200).json({ status: true ,message: 'Success Create Homestay' });  
								                }          
							                });  
							          		});  
						                }          
					                });  
					          		});		                    	  
			                }          
		                });  
		          		});
	                
	              }
	           } else {
	              res.status(400).json({status: false, message: 'Pemandu belum terdaftar, silahkan daftar menjadi pemandu terlebih dahulu'});
	           }
	        });
	    });
    }    
}
// Update Homestay //route = api/homestay/update
homestayController.updateHomestay = (req, res) => {
	var homestay_id = req.params.homestay_id
	var ac = req.body.ac,
        parking = req.body.parking,
        bathroom = req.body.bathroom,
        bedroom = req.body.bedroom,
        wifi = req.body.wifi       
    var nama_homestay = req.body.nama_homestay,
    	harga_perhari= req.body.harga_perhari,
    	deskripsi= req.body.deskripsi,
    	alamat= req.body.alamat
    var	provinsi = req.body.provinsi,
    	kabupaten = req.body.kabupaten,
    	kecamatan = req.body.kecamatan
    var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id 	
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {	  
    	var queryHomestay = 'SELECT * FROM homestay WHERE homestay_id = ?'
    	var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
    	var querySelectAlamatCategory = 'SELECT alamatcategory_id FROM alamatcategory WHERE provinsi = ? AND kabupaten = ? AND kecamatan = ?';
	    var queryUpdateHomestayById = 'UPDATE homestay SET alamatcategory_id= ? ,nama_homestay=?, harga_perhari = ? , deskripsi = ? ,alamat = ? WHERE homestay_id = ?';
	    var queryUpdateFasilitas = 'UPDATE fasilitas SET ac = ?, parking = ?, bathroom = ?, bedroom = ?, wifi = ? WHERE fasilitas_id = ?';	   
	    req.getConnection(function(err,connection){
	        connection.query(queryHomestay,[homestay_id],function(err,rows){	        	
	           if(err)
	               console.log("Error Selecting : %s ", err);
	           if(rows.length){	 
	           		var fasilitas_id = rows[0].fasilitas_id
	           		var pemandu_idHomestay = rows[0].pemandu_id
	           		req.getConnection(function(err,connection){
	       		 		connection.query(queryPemandu,[user_id],function(err,rowspemandu){	       		 				
	       		 				if(err)
	               					console.log("Error Selecting : %s ", err);
	       		 				if(pemandu_idHomestay != rowspemandu[0].pemandu_id){
	       		 					res.status(401).json({status: false, message: 'Otentikasi gagal.'});
	       		 				}else{
	       		 					if(!harga_perhari ||!deskripsi||!alamat||!provinsi ||!kabupaten ||!kecamatan||!ac||!parking||!bathroom||!bedroom||!wifi){
						                res.status(400).json({status: false, message: 'Data Incomplete'});
						            }else {
					              		req.getConnection(function(err,connection){
					                    connection.query(querySelectAlamatCategory,[provinsi,kabupaten,kecamatan],function(err,resultsAC){
						                    if(err){
						                        console.log("Error Selecting : %s ", err);
						                    } else { 	     
						                    	  var alamatcategory_id = resultsAC[0].alamatcategory_id
						                    	  req.getConnection(function(err,connection){
								                    connection.query(queryUpdateFasilitas,[ac,parking,bathroom,bedroom,wifi,fasilitas_id],function(err,results){
									                    if(err){
									                        console.log("Error Selecting : %s ", err);
									                    } else {   	
								                    	  	req.getConnection(function(err,connection){
										                    connection.query(queryUpdateHomestayById,[alamatcategory_id,nama_homestay,harga_perhari,deskripsi,alamat,homestay_id],function(err,results){
											                    if(err){
											                        console.log("Error Selecting : %s ", err);
											                    } else { 	     
											                    	 res.status(200).json({ status: true ,message: 'Success Update Homestay' });  
												                }          
											                });  
											          		});  
										                }          
									                });  
									          		});		                    	  
							                }          
						                });  
						          		});	                
						              }
	       		 				}
		       		 	});
		       		});	           
	           } else {
	              res.status(400).json({status: false, message: 'Pemandu belum terdaftar, silahkan daftar menjadi pemandu terlebih dahulu'});
	           }
	        });
	    });
    }    
}

// Add Homestay //route = api/homestay/delete/:homestay_id
homestayController.deleteHomestay = (req, res) => {
    var homestay_id = req.params.homestay_id
    var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id 
    var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
	var queryHomestay= 'SELECT * FROM homestay WHERE homestay_id = ?'
	var queryDeleteHomestay = 'DELETE FROM homestay WHERE homestay_id = ?'
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {
    	req.getConnection(function(err,connection){
    		connection.query(queryHomestay,[homestay_id],function(err,rows){
    			if(err)
                  console.log("Error Selecting : %s ", err);
                else if(!rows.length){
                  res.status(404).json({ message: 'Homestay ID not Found' });
                }else{
                  var homestayPemandu_id = rows[0].pemandu_id
                  req.getConnection(function(err,connection){
			    		connection.query(queryPemandu,[user_id],function(err,rows){
			    			if(err)
			                  console.log("Error Selecting : %s ", err);
			                else if(!rows.length){
			                  res.status(404).json({ message: 'Anda belum terdaftar sebagai pemandu' });
			                }else{
			                  var pemandu_id = rows[0].pemandu_id
			                  if(pemandu_id != homestayPemandu_id){
			                  	 res.status(404).json({ message: 'Anda tidak memiliki otorisasi' });
			                  }else{
			                  	req.getConnection(function(err,connection){
			                  		connection.query(queryDeleteHomestay,[homestay_id],function(err,results){
			                  			if(err)
						                  console.log("Error Selecting : %s ", err);
						                else if(!results){
						                  res.status(404).json({ message: 'Homestay ID not Found' });
						                }else{
						                  res.status(200).json({ status: true ,message: 'Success Delete Homestay' });  
						                }
			                  		});
			                  	});
			                  }
			                }	
			    		});
			    	});
                }	
    		});
    	});
    		
    }    
}

homestayController.searchHomestay = (req, res) =>{
 var provinsi = req.body.provinsi,
	 kabupaten = req.body.kabupaten,
	 kecamatan = req.body.kecamatan
 var batasAtas = 500000,
     batasBawah = 0
 var nama_homestay = req.body.nama_homestay,
     harga_perhari_bawah= req.body.harga_perhari_bawah,
     harga_perhari_atas= req.body.harga_perhari_atas
 var querySelectHomestay = 'SELECT * FROM homestay'
 var querySelectAlamatCategory = 'SELECT alamatcategory_id FROM alamatcategory WHERE provinsi = ? AND kabupaten = ? AND kecamatan = ?'
 var querySelectHomestayAlamat = 'SELECT * FROM homestay WHERE alamatcategory_id = ?'
 var querySearchHomestayAlamatPrice = 'SELECT * FROM homestay WHERE alamatcategory_id = ? AND harga_perhari BETWEEN ? AND ?'
 //var querySelectHomestayKeyword = 'SELECT * FROM homestay WHERE nama_homestay LIKE ?'
 
 	if(!provinsi || !kabupaten || !kecamatan ||!harga_perhari_atas ||!harga_perhari_bawah ){
 		req.getConnection(function(err,connection){
			connection.query(querySelectHomestay,function(err,results){
				if(err){
					console.log("Error Selecting : %s ", err);
				}else if(!results){
					res.status(404).json({ message: 'Homestay ID not Found' });
				}else{
					res.status(200).json({status:200,message:'Get data success',results});	
				}				
				
			});
		});
 	}else if(provinsi||kabupaten||kecamatan){
 		req.getConnection(function(err,connection){
			connection.query(querySelectAlamatCategory,[provinsi,kabupaten,kecamatan],function(err,results){
				if(err){
					console.log("Error Selecting : %s ", err);
				}else if(!results){
					res.status(404).json({ message: 'Alamat Category not Found' });
				}else{
					var alamatcategory_id = results[0].alamatcategory_id
					if(harga_perhari_bawah != batasBawah || harga_perhari_atas != batasAtas){
						req.getConnection(function(err,connection){
							connection.query(querySearchHomestayAlamatPrice,[alamatcategory_id,harga_perhari_bawah,harga_perhari_atas],function(err,results){
								if(err){
									console.log("Error Selecting : %s ", err);
								}else if(!results){
									res.status(404).json({ message: 'Homestay Not Found' });
								}else{
									res.status(200).json({status:200,message:'Get data success',results});	
								}				
								
							});
						});
					}else{
						req.getConnection(function(err,connection){
							connection.query(querySelectHomestayAlamat,[alamatcategory_id],function(err,results){
								if(err){
									console.log("Error Selecting : %s ", err);
								}else if(!results){
									res.status(404).json({ message: 'Homestay Not Found' });
								}else{
									res.status(200).json({status:200,message:'Get data success',results});	
								}		
							});
						});
					}
				}				
				
			});
		});
 	}
}

//api/homestay/uploadphoto
homestayController.uploadPhoto = async (req, res) => {        
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else if(!req.params.homestay_id){
    	 res.status(400).json({ status:false, message: 'Data Incomplete' });
    } else { 
      var homestay_id = req.params.homestay_id
      var token = req.headers.authorization
      var decodedToken = shortcutFunction.decodeToken(token)   
      var user_id = decodedToken.user_id
      var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
      var queryHomestay = 'SELECT * FROM homestay WHERE homestay_id = ?'
      var newNameUpload;
      var direktori = './public/uploads/homestayphoto/'

      //Destination storage
      var storage = multer.diskStorage({      
        destination: direktori,
        filename: function (req, file, callback) {
          newNameUpload = file.fieldname + '-' + homestay_id + ".png"
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
      }).single('homestayPhoto');

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
									        } else if (req.file == null || req.file == 0) {
									          res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
									        } else {
									          var direktoriPhoto = direktori + newNameUpload
									          var queryUpdateUHomestayPhoto = 'UPDATE homestay SET picture = ? WHERE homestay_id = ?';
									          req.getConnection(function(err,connection){
									            connection.query(queryUpdateUHomestayPhoto,[direktoriPhoto,homestay_id],function(err,results){
									                if(err)
									                  console.log("Error Selecting : %s ", err);
									                else if(results.length){
									                  res.status(404).json({ message: 'Homestay ID not Found' });
									                }
									                else{
									                  res.status(200).json({status: true , message: 'Success Update Photo Homestay' });   
									                }
									            });
									          });
									        }
									      });
					             	}else {
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
}
module.exports = homestayController;