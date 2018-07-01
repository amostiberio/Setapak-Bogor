var alamatController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

// Get All Barang Satu Pemandu //router = api/alamat/provinsi
alamatController.getProvinsi = (req, res) => {		
		var querySelectProvinsi  = 'SELECT DISTINCT provinsi FROM alamatcategory ' 
		  	  	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectProvinsi,function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){	            	
                    res.json({status: 200, message: 'Data Provinsi', data: rows});
	            }
	    	});
	    });   
}



// Get All Barang Satu Pemandu //router = api/alamat/kabupaten
alamatController.getKabupaten = (req, res) => {		
	var querySelectProvinsi  = 'SELECT DISTINCT kabupaten from alamatcategory'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectProvinsi,function(err,rows){ //get pemandu id
			if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.json({status: 200, message: 'Data Barang untuk Pemandu', data: rows});
			}
		});
	});   
}

// Get All Barang Satu Pemandu //router = api/alamat/kecamatan
alamatController.getKecamatan= (req, res) => {	   		   	
	var querySelectProvinsi  = 'SELECT alamatcategory_id,kecamatan FROM alamatcategory'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectProvinsi,function(err,rows){ //get pemandu id
			  if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.json({status: 200, message: 'Data Barang untuk Pemandu', data: rows});
			}
		});
	});   
}

module.exports = alamatController;