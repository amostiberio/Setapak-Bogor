var alamatController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

// //router = api/alamat/provinsi
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



// //router = api/alamat/kabupaten
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

// //router = api/alamat/kecamatan
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

// Get nama data dari alamat category//router = api/alamat/category/:idalamat
alamatController.getDetailCategory= (req, res) => {	   		  
	var idalamatcategory = req.params.idalamat
	var querySelectProvinsi  = 'SELECT * FROM alamatcategory WHERE alamatcategory_id = ?'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectProvinsi,[idalamatcategory],function(err,rows){ //get pemandu id
			if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.json({status: 200, message: 'Sukses', data: rows});
			}
		});
	});   
}

module.exports = alamatController;