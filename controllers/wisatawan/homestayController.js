var homestayController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

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
        payload = shortcutFunction.authToken(token),        
        user_id = payload.user_id  	
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

module.exports = homestayController