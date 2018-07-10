var commentDiskusiController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var token;

// //router = api/diskusi/produk/:produk_id
commentDiskusiController.getCommentsProduk = (req, res) => {
		var diskusi_id = req.params.diskusi_id	
		var querySelectComment = 'SELECT * FROM comment_produk where diskusi_id = ? ORDER BY created_date ASC'
		req.getConnection(function(err,connection){
	    	connection.query(querySelectComment,[diskusi_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){	            	
                    res.json({status: 200, message: 'Sukses get Data Comment', data: rows});
	            }else{
	            	res.json({status: 204, message: 'Belum Ada Comment'});

	            }
	    	});
	    });     	  	     
}


//router = api/diskusi/produk/:produk_id
commentDiskusiController.createComment = (req, res) => {
		var diskusi_id = req.body.diskusi_id,
			user_id = req.body.user_id,		
			isi_comment = req.body.isi_comment,
			created_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')		
		var queryCreateComment = 'INSERT INTO comment_produk SET diskusi_id = ? , user_id = ? , isi_comment = ?,created_date =?,nama_user =? , photo_user = ?' 
	    var querySelectUser  = 'SELECT * FROM user WHERE user_id = ? '       
	      req.getConnection(function(err,connection){
	        connection.query(querySelectUser,[user_id],function(err,rows){ //get pemandu id
	              if(err)
	                 console.log("Error Selecting : %s ", err);
	              if(rows.length){
	              		var nama_user = rows[0].nama,
	              			photo_user = rows[0].photo            
	                    req.getConnection(function(err,connection){
					    	connection.query(queryCreateComment,[diskusi_id,user_id,isi_comment,created_date,nama_user,photo_user],function(err,rows){ //get pemandu id
					    	  	if(err){
					               console.log("Error Selecting : %s ", err);					            
					    	  	}else{
					            	res.json({status: 200, message: 'Sukses Tambah Comment'});
					            }
					    	});
					    });
	              }
	        });
	      });    	       	  	     
}

//router = api/diskusi/produk/:produk_id
commentDiskusiController.deleteComment = (req, res) => {
		var token = req.body.token
		var comment_id = req.body.comment_id
		jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
            	return res.json({status: 401,message: 'invalid_token'});
        	}else{
        		var user_id = decoded.user_id
				var querySelectComment  = 'SELECT * FROM comment_produk where comment_id = ?'
				var queryDeleteComment  = 'DELETE FROM comment_produk where comment_id = ?'
				req.getConnection(function(err,connection){
			    	connection.query(querySelectComment,[comment_id],function(err,rows){ //get pemandu id
			    	  	if(err)
			               console.log("Error Selecting : %s ", err);
			            if(rows.length){
			            	if(rows[0].user_id = user_id){
			            		req.getConnection(function(err,connection){
							    	connection.query(queryDeleteComment,[comment_id],function(err,rows){ //get pemandu id
							    	  	if(err)
							               console.log("Error Selecting : %s ", err);
							            if(!rows){
						                  res.json({ status: 404 , message: 'Comment ID not Found' });
						                }else{
						                  res.json({ status: 200 ,message: 'Success Delete Comment' });  
						                }
							    	});
							    });  
			            	}			            	
			            }else{
			            	res.json({status: 400, message: 'Comment ID not Found'});
			            }
			    	});
			    });   
        	}
        });	  	  	     
}

module.exports = commentDiskusiController;