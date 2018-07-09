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

// //router = api/alamat/provinsi
alamatController.getProvinsiTarif = (req, res) => {

		var querySelectProvinsi  = 'SELECT DISTINCT provinsi FROM tarif'   	  	
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



// //router = api/alamat/provinsi
alamatController.getKabupatenTarif = (req, res) => {
		var provinsi = req.body.provinsi
		var querySelectKabupaten  = 'SELECT DISTINCT kabupaten FROM tarif where provinsi = ?'   	  	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectKabupaten,[provinsi],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){	            	
                    res.json({status: 200, message: 'Data kabupaten', data: rows});
	            }
	    	});
	    });   
}

// //router = api/alamat/provinsi
alamatController.getKecamatanTarif = (req, res) => {
		var provinsi = req.body.provinsi
		var kabupaten = req.body.kabupaten
		var querySelectKecamatan  = 'SELECT DISTINCT kecamatan FROM tarif where provinsi = ? AND kabupaten = ?'   	  	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectKecamatan,[provinsi,kabupaten],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){	            	
                    res.json({status: 200, message: 'Data Kecamatan', data: rows});
	            }
	    	});
	    });   
}


// //router = api/alamat/tarif
alamatController.dataTarif = (req, res) => {
		var provinsi = req.body.provinsi
		var kabupaten = req.body.kabupaten
		var kecamatan = req.body.kecamatan
		var querySelectTarif  = 'SELECT * FROM tarif where provinsi = ? AND kabupaten = ? AND kecamatan = ?'   	  	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectTarif,[provinsi,kabupaten,kecamatan],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){	            	
                    res.json({status: 200, message: 'Data Tarif', data: rows[0]});
	            }
	    	});
	    });   
}



module.exports = alamatController;