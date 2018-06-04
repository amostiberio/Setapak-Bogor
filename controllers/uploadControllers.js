var uploadController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var token;


/*transaction status
	0 = Belum Di konfirmasi Pemandu
	1 =	Konfirmasi
	
	produk type
	Homestay 
	Jasa
	Produk 
*/
		
    
//api/homestay/uploadphoto
uploadController.buktiPembayaranHomestay = async (req, res) => {
	        
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else if(!req.params.homestay_id){
    	 res.status(400).json({ status:false, message: 'Data Incomplete' });
    } else { 
      var homestay_id = req.params.homestay_id
      var token = req.headers.authorization,     
	      payload = shortcutFunction.authToken(token),        
	      user_id = payload.user_id 
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

module.exports = uploadController