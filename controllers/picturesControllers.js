var pictureController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;


// Get nama data dari alamat category//router = api/alamat/category/:idalamat
pictureController.getHomestayPictures= (req, res) => {	   		  
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

module.exports = pictureController;