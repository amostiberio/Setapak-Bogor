var jasaController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

// Get View Homestay Satu Pemandu //router = api/homestay/:homestay_id
jasaController.getOneJasa = (req, res) => {
	var jasa_id = req.params.jasa_id
	var querySelectJasa  = 'SELECT * FROM jasa WHERE jasa_id = ?'
	var querySelectPemandu  = 'SELECT * FROM pemandu WHERE pemandu_id = ?'
	var querySelectAlamatCategory = 'SELECT * FROM alamatcategory WHERE alamatcategory_id = ?';
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectJasa,[jasa_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var pemandu_id = rows[0].pemandu_id;
	            	var alamatcategory_id = rows[0].alamatcategory_id;
	            	var dataJasa= rows[0]
	            	//res.json(dataHomestay)	            			
		            	req.getConnection(function(err,connection){
					    	connection.query(querySelectPemandu,[pemandu_id],function(err,pemandu){ //get data Homestay 
					    	  	if(err)
					               console.log("Error Selecting : %s ", err);
					            if(pemandu.length){
					             	var dataPemandu = pemandu[0]
					             	req.getConnection(function(err,connection){
										connection.query(querySelectAlamatCategory,[alamatcategory_id],function(err,alamatCategory){ //get data Homestay 
											if(err)
											   console.log("Error Selecting : %s ", err);
											if(alamatCategory.length){
												 var dataAlamatCategory = alamatCategory[0]
												 res.status(200).json({status: true, message: 'Select Jasa', dataJasa, dataPemandu, dataAlamatCategory});					         
											}
										});
									});					         
					            }
					    	});
					    });
	            }else{
					res.status(401).json({status: false, message: 'Jasa tidak ditemukan (Missing ID)'});
				}
	    	});
	    });
}

// Get All Homestay Satu Pemandu //router = api/homestay/pemandu/:pemandu_id
jasaController.getPemanduJasa = (req, res) => {		
   		var pemandu_id = req.params.pemandu_id    	
    	var querySelectPemandu  = 'SELECT * FROM pemandu WHERE pemandu_id = ?'
    	var querySelectJasa = 'SELECT * FROM homestay WHERE pemandu_id = ? AND status_avail = ? '
    	var querySelectAlamatCategory = 'SELECT * FROM alamatcategory WHERE alamatcategory_id = ?';	   	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectPemandu,[pemandu_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var data_pemandu = rows[0]	            	
	            	var nama_company = data_pemandu.nama_company
	            	var status_avail = 1
	            	req.getConnection(function(err,connection){
				    	connection.query(querySelectJasa,[pemandu_id,status_avail],function(err,rows){ //get data Homestay 
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){	            	
				            	res.status(200).json({status: true, message: 'Data Homestay untuk Pemandu',nama_company : nama_company, data: rows});					      
				            }else{
				            	res.status(401).json({status: false, message: 'Tidak ada Jasa yang tersedia dari Pemandu',nama_company});

				            }
				    	});
				    });
	            }
	    	});
	    });   
}

module.exports = jasaController;