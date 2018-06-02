var transaksiController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;


/*transaction status
	0 = Belum Di konfirmasi Pemandu
	1 =	Konfirmasi
	
	produk type
	Homestay 
	Jasa
	Produk 
*/

// Add Transaksi Homestay //route = api/transaksi/pesanHomestay/:homestay_id
transaksiController.pesanHomestay = (req, res) => {
	var today = new Date();
   	var homestay_id = req.params.homestay_id,
   		jumlah = req.body.jumlah
   		type = 'Homestay'
   	var transaction_status = '0' // belum di konfirmasi pemandu
    var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id 	
    var queryHomestay = 'SELECT * FROM homestay WHERE homestay_id = ?'
    var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?' 
    var queryAddTransaksi = 'INSERT INTO transactions SET type = ?, pemandu_id = ? , user_id = ? , produk_id = ?, jumlah = ? ,transaction_date = ?, transaction_status = ?'
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else if (!homestay_id){
    	res.status(401).json({status: false, message: 'Something missing (ID Homestay)!'});
    }else if (jumlah == 0){
    	res.status(401).json({status: false, message: 'Kuantitas tidak memenuhi syarat'});
    }else{
    	req.getConnection(function(err,connection){
	        connection.query(queryHomestay,[homestay_id],function(err,rows){
		        if(err) console.log("Error Selecting : %s ", err);	
		        else{
		        	var pemandu_id = rows[0].pemandu_id
		        	var produk_id = homestay_id
		        	req.getConnection(function(err,connection){
	        			connection.query(queryPemandu,[user_id],function(err,rows){  
	        				if(err) console.log("Error Selecting : %s ", err); 
	        				if(pemandu_id == rows[0].pemandu_id ){
	        					res.status(401).json({status: false, message: 'Pemandu tidak bisa memesan produk sendiri'});
	        				}else{
	        					req.getConnection(function(err,connection){
				       				connection.query(queryAddTransaksi,[type,pemandu_id,user_id,produk_id,jumlah,today,transaction_status],function(err,rows){
					        	if(err) console.log("Error Selecting : %s ", err);	
					       		else{					        	
					        		res.status(200).json({success:true,message: 'Success Transaksi Homestay' });   
					        	}	        
						        });
						    });
	        				}
	        			});
	    			});   
		      
		        }	        
	        });
	    });    
    }
}

// Verifkasi transaksi homestay  //route = api/transaksi/verifikasi/:transaction_id
// Verifikasi ini dilakukan oleh pemandu
transaksiController.verifikasiTransaksi = (req, res) => {
	var token = req.headers.authorization,
	    decodedToken = shortcutFunction.decodeToken(token),   
	    user_id = decodedToken.user_id
	var transaction_id = req.params.transaction_id
	var queryPemandu = "SELECT * FROM pemandu WHERE user_id = ?"		
	var queryUpdateVerify = "UPDATE transactions SET transaction_status = ?"
	var queryTransaksi = "SELECT * FROM transactions WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if (rows[0].transaction_status == 1){
				res.status(400).json({status:400,success:false,message:'Transaksi telah di verifikasi'});
			}else{
				/*
				var kode_produk = rows[0].produk_id.split(" ")[0];
				var produk_id = rows[0].produk_id.split(" ")[1];
				*/
				var pemandu_id = rows[0].pemandu_id; // yang ada di transaction	
				//Homestay
					req.getConnection(function(err,connection){
						connection.query(queryPemandu,[user_id],function(err,rows){
							if(pemandu_id != rows[0].pemandu_id){
								res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
							}else{
								req.getConnection(function(err,connection){
									connection.query(queryUpdateVerify,[1],function(err,rows){
										if(err) console.log("Error Selecting : %s ", err);	
										res.json({status:200,success:true,message:'Verfikasi Success'});
									});
								});
							}	
							});
						});				
			}
		});
	});
} //

// Cancel transaksi  //route = api/transaksi/cancel/:transaction_id
// Cancel ini dilakukan oleh user
transaksiController.cancelTransaksibyUser = (req, res) => {
	var token = req.headers.authorization,
	    decodedToken = shortcutFunction.decodeToken(token),   
	    user_id = decodedToken.user_id
	var transaction_id = req.params.transaction_id
	var queryTransaksi = "SELECT * FROM transactions WHERE transaction_id = ?"
	var queryCancelTransaksi = "DELETE FROM transactions WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(rows[0].transaction_status == 1){
				res.status(400).json({status:400,success:false,message:'Transaksi telah di verifikasi, tidak dapat di Cancel'});
			}else if(user_id != rows[0].user_id){
				res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
			}else{
				req.getConnection(function(err,connection){
					connection.query(queryCancelTransaksi,[transaction_id],function(err,rows){
						if(err) console.log("Error Selecting : %s ", err);
						else{
							res.status(200).json({status:200,message:"Transaksi telah sukses dicancel"});
						}
					});
				});
			}			
		});
	});
}		
    


module.exports = transaksiController