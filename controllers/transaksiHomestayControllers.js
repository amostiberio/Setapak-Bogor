var transaksiHomestayController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var token;


/*transaction status
	0 = Belum Di konfirmasi Pemandu
	1 =	Konfirmasi
	
	produk type
	Homestay 
	Jasa
	Produk 
*/

// Add Transaksi Homestay //route = api/transaksiHomestay/pesanHomestay/:homestay_id
transaksiHomestayController.pesanHomestay = (req, res) => {
	var token = req.headers.authorization,     
        payload = shortcutFunction.authToken(token),        
        user_id = payload.user_id 
	var today = new Date();	
   	var homestay_id = req.params.homestay_id,   		
   		check_in = req.body.check_in,
   		check_out = req.body.check_out,
   		jumlah_hari = moment.duration(moment(check_out, "YYYY-MM-DD").diff(moment(check_in, "YYYY-MM-DD"))).asDays(),
   		transaction_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')  		
    var queryHomestay = 'SELECT * FROM homestay WHERE homestay_id = ?'
    var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
    var queryCheckTransaksi = 'SELECT * FROM transaksi_homestay WHERE homestay_id = ? AND check_in between ? AND ? AND check_out between ? AND ?'
    var queryAddTransaksi = 'INSERT INTO transaksi_homestay SET  pemandu_id = ? , user_id = ? , homestay_id = ?, check_in = ? , check_out = ?, jumlah_hari = ? ,transaction_date = ?'
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else if (!homestay_id){
    	res.status(401).json({status: false, message: 'Something missing (ID Homestay)!'});
    }else if (jumlah_hari < 1){
    	res.status(401).json({status: false, message: 'Minimal 1 hari pemesanan, jumlah tidak memenuhi syarat'});
    }else{
    	req.getConnection(function(err,connection){
	        connection.query(queryHomestay,[homestay_id],function(err,rows){
		        if(err) console.log("Error Selecting : %s ", err);	
		        else{
		        	var pemandu_id = rows[0].pemandu_id
		        	var status_avail = rows[0].status_avail 
		        	req.getConnection(function(err,connection){
	        			connection.query(queryPemandu,[user_id],function(err,rows){  
	        				if(err) console.log("Error Selecting : %s ", err); 
	        				if(pemandu_id == rows[0].pemandu_id ){
	        					res.status(401).json({status: false, message: 'Pemandu tidak bisa memesan produk sendiri'});
	        				}else if(status_avail == 0){
	        					res.status(401).json({status: false, message: 'Homestay sedang tidak tersedia'});
	        				}else{
	        					req.getConnection(function(err,connection){
				       				connection.query(queryCheckTransaksi,[homestay_id,check_in,check_out,check_in,check_out],function(err,rows){
							        	if(err) console.log("Error Selecting : %s ", err);	
							       		if(rows.length){
							       			res.status(401).json({status: false, message: 'Homestay Sudah di Booking oleh wisatawan lain pada tanggal yang sama'});
							       		}else{					        	
							        		 req.getConnection(function(err,connection){
							       				connection.query(queryAddTransaksi,[pemandu_id,user_id,homestay_id,check_in,check_out,jumlah_hari,transaction_date],function(err,rows){
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
	        });
	    });    
    }
}

// Verifkasi transaksi homestay  //route = api/transaksi/verifikasi/:transaction_id
// Verifikasi ini dilakukan oleh pemandu
transaksiHomestayController.verifikasiTransaksi = (req, res) => {
	var token = req.headers.authorization,     
        payload = shortcutFunction.authToken(token),        
        user_id = payload.user_id 
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
}

// Cancel transaksi  //route = api/transaksi/cancel/:transaction_id
// Cancel ini dilakukan oleh user
transaksiHomestayController.cancelTransaksibyUser = (req, res) => {
	var token = req.headers.authorization,     
        payload = shortcutFunction.authToken(token),        
        user_id = payload.user_id 
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
    


module.exports = transaksiHomestayController