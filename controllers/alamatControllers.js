var alamatController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

// Get All Barang Satu Pemandu //router = api/alamat/provinsi
alamatController.getProvinsi = (req, res) => {		
		var querySelectProvinsi  = 'SELECT * FROM alamatcategory ' 
		  	  	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectProvinsi,function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){	            	
                    res.status(200).json({status: true, message: 'Data Provinsi', data: rows});
	            }
	    	});
	    });   
}



// Get All Barang Satu Pemandu //router = api/alamat/provinsi
alamatController.getKabupaten = (req, res) => {		
   		   	
	var querySelectProvinsi  = 'SELECT * FROM alamatcategory'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectProvinsi,function(err,rows){ //get pemandu id
			  if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.status(200).json({status: true, message: 'Data Barang untuk Pemandu', data: rows});
			}
		});
	});   
}

// Get All Barang Satu Pemandu //router = api/alamat/provinsi
alamatController.getKecamatan= (req, res) => {		
   		   	
	var querySelectProvinsi  = 'SELECT * FROM alamatcategory'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectProvinsi,function(err,rows){ //get pemandu id
			  if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.status(200).json({status: true, message: 'Data Barang untuk Pemandu', data: rows});
			}
		});
	});   
}

module.exports = alamatController;