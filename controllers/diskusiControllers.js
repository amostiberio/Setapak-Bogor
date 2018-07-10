var diskusiController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var token;

// //router = api/diskusi/produk/:produk_id
diskusiController.getDiskusiProduk = (req, res) => {
		var produk_id = req.params.produk_id
		var tipe_produk = 'Produk'
		var queryCount = 'SELECT COUNT(produk_id) as count FROM diskusi_produk where produk_id = ? AND tipe_produk = ?'
		var querySelectDiskusi  = 'SELECT * FROM diskusi_produk where produk_id = ? AND tipe_produk = ?'
		req.getConnection(function(err,connection){
	    	connection.query(queryCount,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var jumlah = rows[0].count       	
                     req.getConnection(function(err,connection){
				    	connection.query(querySelectDiskusi,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){	            	
			                    res.json({status: 200, message: 'Sukses get Data Diskusi', jumlah: jumlah, data: rows});
				            }else{
				            	res.json({status: 204, message: 'Belum Ada Diskusi', jumlah: jumlah});

				            }
				    	});
				    }); 
	            }
	    	});
	    });     	  	     
}

// //router = api/diskusi/homestay/:produk_id
diskusiController.getDiskusiHomestay = (req, res) => {
		var produk_id = req.params.produk_id
		var tipe_produk = 'Homestay'
		var queryCount = 'SELECT COUNT(produk_id) as count FROM diskusi_produk where produk_id = ? AND tipe_produk = ?'
		var querySelectDiskusi  = 'SELECT * FROM diskusi_produk where produk_id = ? AND tipe_produk = ?'
		req.getConnection(function(err,connection){
	    	connection.query(queryCount,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var jumlah = rows[0].count       	
                     req.getConnection(function(err,connection){
				    	connection.query(querySelectDiskusi,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){	            	
			                    res.json({status: 200, message: 'Sukses get Data Diskusi', jumlah: jumlah, data: rows});
				            }else{
				            	res.json({status: 204, message: 'Belum Ada Diskusi', jumlah: jumlah});

				            }
				    	});
				    }); 
	            }
	    	});
	    });     		
}
// //router = api/diskusi/jasa/:produk_id
diskusiController.getDiskusiJasa = (req, res) => {
		var produk_id = req.params.produk_id
		var tipe_produk = 'Jasa'
		var queryCount = 'SELECT COUNT(produk_id) as count FROM diskusi_produk where produk_id = ? AND tipe_produk = ?'
		var querySelectDiskusi  = 'SELECT * FROM diskusi_produk where produk_id = ? AND tipe_produk = ?'
		req.getConnection(function(err,connection){
	    	connection.query(queryCount,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var jumlah = rows[0].count       	
                     req.getConnection(function(err,connection){
				    	connection.query(querySelectDiskusi,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){	            	
			                    res.json({status: 200, message: 'Sukses get Data Diskusi', jumlah: jumlah, data: rows});
				            }else{
				            	res.json({status: 204, message: 'Belum Ada Diskusi', jumlah: jumlah});

				            }
				    	});
				    }); 
	            }
	    	});
	    }); 
}


//router = api/diskusi/produk/:produk_id
diskusiController.createDiskusi = (req, res) => {
		var user_id = req.body.user_id,
			produk_id = req.body.produk_id,
			tipe_produk = req.body.tipe_produk,
			isi_diskusi = req.body.isi_diskusi,
			created_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')
		var queryCreateDiskusi = 'INSERT INTO diskusi_produk SET  user_id = ? , produk_id = ? , tipe_produk = ?,isi_diskusi = ?,created_date =?' 
		req.getConnection(function(err,connection){
	    	connection.query(queryCreateDiskusi,[user_id,produk_id,tipe_produk,isi_diskusi,created_date],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	res.json({status: 200, message: 'Sukses Tambah Diskusi'});
	            }else{
	            	res.json({status: 400, message: 'Gagal Tambah Diskusi'});
	            }
	    	});
	    });     	  	     
}

//router = api/diskusi/produk/:produk_id
diskusiController.deleteDiskusi = (req, res) => {
		var token = req.body.token
		var diskusi_id = req.body.diskusi_id
		jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
            	return res.json({status: 401,message: 'invalid_token'});
        	}else{
        		var user_id = decoded.user_id
				var querySelectDiskusi  = 'SELECT * FROM diskusi_produk where diskusi_id = ?'
				var queryDeleteDiskusi  = 'DELETE FROM diskusi_produk where diskusi_id = ?'
				req.getConnection(function(err,connection){
			    	connection.query(querySelectDiskusi,[diskusi_id],function(err,rows){ //get pemandu id
			    	  	if(err)
			               console.log("Error Selecting : %s ", err);
			            if(rows.length){
			            	if(rows[0].user_id = user_id){
			            		req.getConnection(function(err,connection){
							    	connection.query(queryDeleteDiskusi,[diskusi_id],function(err,rows){ //get pemandu id
							    	  	if(err)
							               console.log("Error Selecting : %s ", err);
							            if(!rows){
						                  res.json({ status: 404 , message: 'Diskusi ID not Found' });
						                }else{
						                  res.json({ status: 200 ,message: 'Success Delete Diskusi' });  
						                }
							    	});
							    });  
			            	}			            	
			            }else{
			            	res.json({status: 400, message: 'Diskusi ID not Found'});
			            }
			    	});
			    });   
        	}
        });	  	  	     
}

module.exports = diskusiController;