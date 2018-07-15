var reviewController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var token;

// //router = api/review/average
reviewController.countAvgReview = (req, res) => {
		var produk_id = req.body.produk_id,
			tipe_produk = req.body.tipe_produk
		var queryAVGReview = 'SELECT AVG(jumlah_star) as avg FROM review_produk WHERE produk_id = ? AND tipe_produk = ?'
		var queryCount = 'SELECT COUNT(*) as count FROM review_produk where produk_id = ? AND tipe_produk = ?'	
	    req.getConnection(function(err,connection){
	    	connection.query(queryCount,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows[0].count){
	            	var jumlah = rows[0].count       	
                     req.getConnection(function(err,connection){
				    	connection.query(queryAVGReview,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
				    	  	if(err){
				               console.log("Error Selecting : %s ", err);
				            }if(rows[0].avg){	
				            	var average = rows[0].avg           	
			 					res.json({status: 200, message: 'Sukses get Data Review', average: average,jumlah:jumlah});
				            }else{		                        	
				            	res.json({status: 204, message: 'Belum Ada Review'});
				            }            	        
				    	});
				    });

	            }else{		                        	
	            	res.json({status: 204, message: 'Belum Ada Review'});
	            }	
	    	});
	    });     	  	     
}     	  	     


// //router = api/review/all
reviewController.dataReviewsProduk = (req, res) => {
		var produk_id = req.body.produk_id,
			tipe_produk = req.body.tipe_produk
		var querySelectReview = 'SELECT * FROM review_produk where produk_id = ? AND tipe_produk = ? ORDER BY created_at DESC'
		req.getConnection(function(err,connection){
	    	connection.query(querySelectReview,[produk_id,tipe_produk],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	//var jumlah = rows.length	            	
                    res.json({status: 200, message: 'Sukses get Data Review', data: rows});
	            }else{
	            	res.json({status: 204, message: 'Belum Ada Review'});
	            }
	    	});
	    });     	  	     
}


// //router = api/diskusi/produk/:produk_id
// reviewController.createComment = (req, res) => {
// 		var diskusi_id = req.body.diskusi_id,
// 			user_id = req.body.user_id,		
// 			isi_comment = req.body.isi_comment,
// 			created_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')		
// 		var queryCreateComment = 'INSERT INTO comment_produk SET diskusi_id = ? , user_id = ? , isi_comment = ?,created_date =?,nama_user =? , photo_user = ?' 
// 	    var querySelectUser  = 'SELECT * FROM user WHERE user_id = ? '       
// 	      req.getConnection(function(err,connection){
// 	        connection.query(querySelectUser,[user_id],function(err,rows){ //get pemandu id
// 	              if(err)
// 	                 console.log("Error Selecting : %s ", err);
// 	              if(rows.length){
// 	              		var nama_user = rows[0].nama,
// 	              			photo_user = rows[0].photo            
// 	                    req.getConnection(function(err,connection){
// 					    	connection.query(queryCreateComment,[diskusi_id,user_id,isi_comment,created_date,nama_user,photo_user],function(err,rows){ //get pemandu id
// 					    	  	if(err){
// 					               console.log("Error Selecting : %s ", err);					            
// 					    	  	}else{
// 					            	res.json({status: 200, message: 'Sukses Tambah Comment'});
// 					            }
// 					    	});
// 					    });
// 	              }
// 	        });
// 	      });    	       	  	     
// }

// //router = api/diskusi/produk/:produk_id
// reviewController.deleteComment = (req, res) => {
// 		var token = req.body.token
// 		var comment_id = req.body.comment_id
// 		jwt.verify(token, secret, function(err, decoded) {
//         	if(err) {
//             	return res.json({status: 401,message: 'invalid_token'});
//         	}else{
//         		var user_id = decoded.user_id
// 				var querySelectComment  = 'SELECT * FROM comment_produk where comment_id = ?'
// 				var queryDeleteComment  = 'DELETE FROM comment_produk where comment_id = ?'
// 				req.getConnection(function(err,connection){
// 			    	connection.query(querySelectComment,[comment_id],function(err,rows){ //get pemandu id
// 			    	  	if(err)
// 			               console.log("Error Selecting : %s ", err);
// 			            if(rows.length){
// 			            	if(rows[0].user_id = user_id){
// 			            		req.getConnection(function(err,connection){
// 							    	connection.query(queryDeleteComment,[comment_id],function(err,rows){ //get pemandu id
// 							    	  	if(err)
// 							               console.log("Error Selecting : %s ", err);
// 							            if(!rows){
// 						                  res.json({ status: 404 , message: 'Comment ID not Found' });
// 						                }else{
// 						                  res.json({ status: 200 ,message: 'Success Delete Comment' });  
// 						                }
// 							    	});
// 							    });  
// 			            	}			            	
// 			            }else{
// 			            	res.json({status: 400, message: 'Comment ID not Found'});
// 			            }
// 			    	});
// 			    });   
//         	}
//         });	  	  	     
// }

module.exports = reviewController;