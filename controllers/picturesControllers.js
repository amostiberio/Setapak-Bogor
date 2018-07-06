var pictureController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

/*	Kode Tipe:
	HomestayPhoto
	JasaPhoto
	BarangPhoto
	BuktiPembayaranHomestay
	BuktiPembayaranJasa
	BuktiPembayaranBarang
	UserPhoto
	PemanduPhoto

*/
		

// Get list picture homestay//router = api/picture/homestay/:idhomestay
pictureController.getHomestayPictures = (req, res) => {	   		  
	var idHomestay = req.params.idhomestay
	var kode = 'HomestayPhoto';
	var querySelectHomestayPicture  = 'SELECT * FROM pictures WHERE produk_id = ? and kode_tipe = ?'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectHomestayPicture,[idHomestay,kode],function(err,rows){ //get pemandu id
			if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.json({status: 200, message: 'Sukses', data: rows});
			}
		});
	});   
}

//Get list picture jasa //router = api/picture/jasa/:idjasa
pictureController.getJasaPictures = (req, res) => {	   		  
	var idjasa = req.params.idjasa
	var kode = 'JasaPhoto';
	var querySelectJasaPicture  = 'SELECT * FROM pictures WHERE produk_id = ? and kode_tipe = ?'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectJasaPicture,[idjasa,kode],function(err,rows){ //get pemandu id
			if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.json({status: 200, message: 'Sukses', data: rows});
			}
		});
	});   
}


module.exports = pictureController;