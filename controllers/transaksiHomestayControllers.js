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
	
	status homestay
	(status 0 = user belum bayar)
	(status 1 = user sudah bayar + upload resi)
	(status 2 = jasa sedang dilakukan[actor :pemandu])
	(status 3 = User sudah pakai homestay[ actor :user, userKonfirmasiHomestayEnd])
	(status 4 = Admin sudah transfer uang ke pemandu + transaksi selesai)

*/
// Get Semua History Transaksi Homestay //route = api/transaksiHomestay/user/historyTransaksi
transaksiHomestayController.historyku = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
    	var token = req.headers.authorization    
		//JWT VERIFY     
	        jwt.verify(token, secret, function(err, decoded) {
	        	if(err) {
	            return res.status(401).send({message: 'invalid_token'});
	        	}else{
	        	var user_id = decoded.user_id
	        	var querySelectTransactions = 'SELECT * FROM transaksi_homestay WHERE user_id = ?'	    
				    req.getConnection(function(err,connection){
				    	connection.query(querySelectTransactions,[user_id],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){
				            	res.status(200).json({status: true, message: 'Sukses Ambil Transaksi User', data: rows});	            
				            }
				    	});
				    }); 
	        	}
	        }); 
    }
}

// Get Semua History Transaksi Homestay berdasarkan status //route = api/transaksiHomestay/user/historyTransaksiku/:transaction_status
transaksiHomestayController.historyTransaksibyStatus = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
    	var transaction_status = req.params.status
    	var token = req.headers.authorization    
		//JWT VERIFY     
	        jwt.verify(token, secret, function(err, decoded) {
	        	if(err) {
	            return res.status(401).send({message: 'invalid_token'});
	        	}else{
	        	var user_id = decoded.user_id
	        	var querySelectTransactions = 'SELECT * FROM transaksi_homestay WHERE user_id = ? AND transaction_status = ?'	    
				    req.getConnection(function(err,connection){
				    	connection.query(querySelectTransactions,[user_id,transaction_status],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){
				            	res.status(200).json({status: true, message: 'Sukses Ambil Transaksi User', data: rows});	            
				            }
				    	});
				    }); 
	        	}
	        }); 
    }
}

// Add Transaksi Homestay //route = api/transaksiHomestay/pesanHomestay/:homestay_id
transaksiHomestayController.pesanHomestay = (req, res) => {
	var homestay_id = req.params.homestay_id,   		
   		check_in = req.body.check_in,
   		check_out = req.body.check_out,
   		jumlah_hari = moment.duration(moment(check_out, "YYYY-MM-DD").diff(moment(check_in, "YYYY-MM-DD"))).asDays(),
   		transaction_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')  	
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else if (!homestay_id){
    	res.status(401).json({status: false, message: 'Something missing (ID Homestay)!'});
    }else if (jumlah_hari < 1){
    	res.status(401).json({status: false, message: 'Minimal 1 hari pemesanan, jumlah tidak memenuhi syarat'});
    }else{
    var queryHomestay = 'SELECT * FROM homestay WHERE homestay_id = ?'
    var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
    var queryCheckTransaksi = 'SELECT * FROM transaksi_homestay WHERE homestay_id = ? AND check_in between ? AND ? AND check_out between ? AND ?'
    var queryAddTransaksi = 'INSERT INTO transaksi_homestay SET  pemandu_id = ? , user_id = ? , homestay_id = ?, check_in = ? , check_out = ?, jumlah_hari = ? ,transaction_date = ?' 
    	var token = req.headers.authorization          
        jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
            return res.status(401).send({message: 'invalid_token'});
        	}else{
        	var user_id = decoded.user_id
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
        });	  
    }
}

// Konfirmasi transaksi homestay sedang dipakai oleh pemandu
// route = api/transaksiHomestay/pemandu/konfirmasi/:transaction_id
// Konfirmasi ini dilakukan oleh pemandu
transaksiHomestayController.konfirmasiTransaksiSedangDipakai = (req, res) => {	
	var transaction_id = req.params.transaction_id
	var queryPemandu = "SELECT * FROM pemandu WHERE user_id = ?"		
	var queryTransaksi = "SELECT * FROM transaksi_homestay WHERE transaction_id = ?"
	var queryUpdateStatusKonfirmasi = "UPDATE transaksi_homestay SET transaction_status = ? WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!req.headers.authorization) {
        		res.status(401).json({status: false, message: 'Please Login !'});
    		}else if (rows[0].transaction_status < 1){
				res.status(400).json({status:400,success:false,message:'Status transaksi : Wisatawan belum melakukan pembayaran dan upload bukti pembayaran'});
			}else if(rows[0].transaction_status == 2){
				res.status(400).json({status:400,success:false,message:'Status transaksi : Sudah dikonfirmasi homestay sedang dipakai wisatawan'});
			}else{
				var token = req.headers.authorization    
				//JWT VERIFY     
			        jwt.verify(token, secret, function(err, decoded) {
			        	if(err) {
			            return res.status(401).send({message: 'invalid_token'});
			        	}else{
			        	var user_id = decoded.user_id
			        	let pemandu_idTransaksi = rows[0].pemandu_id
							req.getConnection(function(err,connection){
								connection.query(queryPemandu,[user_id],function(err,rows){
									let pemandu_id = rows[0].pemandu_id
									console.log(pemandu_id,pemandu_idTransaksi)
									if(pemandu_id != pemandu_idTransaksi){
										res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
									}else{
										req.getConnection(function(err,connection){
											connection.query(queryUpdateStatusKonfirmasi,[2,transaction_id],function(err,rows){
												if(err) console.log("Error Selecting : %s ", err);				
												res.json({status:200,success:true,message:'Konfirmasi Homestay sedang dipakai Success'});					
											});
										});
									}
								});
							});	
			        	}
			        });
					
			}
		});
	});
}

// Konfirmasi transaksi homestay selesai dipakai oleh wisatawan
// route = api/transaksiHomestay/user/konfirmasi/:transaction_id
// Konfirmasi ini dilakukan oleh wisatawan
transaksiHomestayController.konfirmasiTransaksiSelesaiDipakai = (req, res) => {
	var token = req.headers.authorization,     
        payload = shortcutFunction.authToken(token),        
        user_id = payload.user_id 
	var transaction_id = req.params.transaction_id
	var queryUser = "SELECT * FROM user WHERE user_id = ?"			
	var queryTransaksi = "SELECT * FROM transaksi_homestay WHERE transaction_id = ?"
	var queryUpdateStatusKonfirmasi = "UPDATE transaksi_homestay SET transaction_status = ? WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!req.headers.authorization) {
        		res.status(401).json({status: false, message: 'Please Login !'});
    		}else if (rows[0].transaction_status < 2){
				res.status(400).json({status:400,success:false,message:'Status transaksi : Belum dikonfirmasi pemakaian oleh pemandu'});
			}else if(rows[0].transaction_status == 3){
				res.status(400).json({status:400,success:false,message:'Status transaksi : Sudah dikonfirmasi pemakaian selesai oleh User'});
			}else{		
				var token = req.headers.authorization    
				//JWT VERIFY     
			        jwt.verify(token, secret, function(err, decoded) {
			        	if(err) {
			            return res.status(401).send({message: 'invalid_token'});
			        	}else{
			        	var user_id = decoded.user_id
			        	let user_idTransaksi = rows[0].user_id
							if(user_id != user_idTransaksi){
								res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
							}else{
								req.getConnection(function(err,connection){
									connection.query(queryUpdateStatusKonfirmasi,[3,transaction_id],function(err,rows){
										if(err) console.log("Error Selecting : %s ", err);				
										res.json({status:200,success:true,message:'Konfirmasi Pemakaian Homestay oleh User Success'});					
									});
								});
							}	
			        	}
			        });
					
			}
		});
	});
}

// Cancel transaksi  //route = api/transaksi/cancel/:transaction_id
// Cancel ini dilakukan oleh user
transaksiHomestayController.cancelTransaksibyUser = (req, res) => {
	
	var transaction_id = req.params.transaction_id
	var queryTransaksi = "SELECT * FROM transaksi_homestay WHERE transaction_id = ?"
	var queryCancelTransaksi = "DELETE FROM transaksi_homestay WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!rows.length){
				res.status(400).json({status:400,success:false,message:'Transaksi tidak dapat di temukan'});
			}else if(!req.headers.authorization) {
        		res.status(401).json({status: false, message: 'Please Login !'});
    		}else if(rows[0].transaction_status != 0){
				res.status(400).json({status:400,success:false,message:'Transaksi telah di verifikasi, tidak dapat di Cancel'});
			}else if(user_id != rows[0].user_id){
				res.status(403).json({status:403,success:false,message:'Forbidden Otorisasi'});
			}else{
				var token = req.headers.authorization    
				//JWT VERIFY     
			        jwt.verify(token, secret, function(err, decoded) {
			        	if(err) {
			            return res.status(401).send({message: 'invalid_token'});
			        	}else{
			        	var user_id = decoded.user_id
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
			}			
		});
	});
}		
    


module.exports = transaksiHomestayController