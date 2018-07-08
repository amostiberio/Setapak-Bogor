var transaksiJasaController = {}
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
	
	status Jasa
	(status 0 = user belum bayar) [setelah transaksi ditambah]
	(status 1 = user sudah bayar + upload resi) [Actor : user , uploadbuktipembayaran]
	(status 2 = pembayaran valid) [Actor : Admin , validasiPembayaran]
	(status 3 = jasa sedang dilakukan) [Actor : Pemandu, konfirmasiPemakaian]
	(status 4 = User sudah selesai menikmati jasa) [Actor : user, konfirmasiPemakaianKelar]
	(status 5 = Admin sudah transfer uang ke pemandu + transaksi selesai) [Actor : admin, dibayar]

*/
// Get Semua History Transaksi jasa //route = api/transaksijasa/user/historyTransaksi
transaksiJasaController.historyku = (req, res) => {
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
	        	var querySelectTransactions = 'SELECT * FROM transaksi_jasa WHERE user_id = ?'	    
				    req.getConnection(function(err,connection){
				    	connection.query(querySelectTransactions,[user_id],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){
				            	res.status(200).json({status: true, message: 'Sukses Ambil Transaksi User', data: rows});	            
				            }else{
				            	res.status(200).json({status: false, message: 'Kamu belum mempunyai transaksi jasa'});
				            }
				    	});
				    }); 
	        	}
	        }); 
    }
}

// Get Semua History Transaksi jasa berdasarkan status //route = api/transaksijasa/user/historyTransaksiku/:transaction_status
transaksiJasaController.historyTransaksibyStatus = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else if(!req.params.status) {
        res.status(401).json({status: false, message: 'Something missing (status)!'});
    }else{
		var transaction_status = req.params.status
		var noteStatus = shortcutFunction.statusJasaTransaksiUser(transaction_status);		
    	var token = req.headers.authorization    
		//JWT VERIFY     
	        jwt.verify(token, secret, function(err, decoded) {
	        	if(err) {
	            return res.status(401).send({message: 'invalid_token'});
	        	}else{
	        	var user_id = decoded.user_id
	        	var querySelectTransactions = 'SELECT * FROM transaksi_jasa WHERE user_id = ? AND transaction_status = ?'	    
				    req.getConnection(function(err,connection){
				    	connection.query(querySelectTransactions,[user_id,transaction_status],function(err,rows){ //get pemandu id
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){
				            	res.status(200).json({status: true, message: 'Sukses Ambil Transaksi User',noteStatus, data: rows});	            
				            }else{
				            	res.status(200).json({status: false, message: 'Tidak ada transaksi anda dengan status ',noteStatus});
				            }
				    	});
				    }); 
	        	}
	        }); 
    }
}

// Add Transaksi jasa //route = api/transaksijasa/pesanjasa/:jasa_id
transaksiJasaController.pesanJasa = (req, res) => {
	var jasa_id = req.params.jasa_id,   		
   		tanggal_booking = req.body.tanggal_booking,  		
		transaction_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss'),
		diffHari = moment.duration(moment(tanggal_booking, "YYYY-MM-DD").diff(moment(transaction_date, "YYYY-MM-DD"))).asDays()   
    if(!req.body.token ) {
        res.json({status: 401, message: 'Please Login !'});
    }else if (!jasa_id){
    	res.json({status: 401, message: 'Something missing (ID Jasa)!'});
    }else if (diffHari < 1){
    	res.json({status: 401, message: 'Pemesanan minimal dilakukan sehari sebelum tanggal booking'});
    }else{
    var queryJasa = 'SELECT * FROM jasa WHERE jasa_id = ?'
    var queryPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
    var queryCheckTransaksi = 'SELECT * FROM transaksi_jasa WHERE jasa_id = ? AND tanggal_booking = ? AND transaction_status < ?'
    var queryAddTransaksi = 'INSERT INTO transaksi_jasa SET  pemandu_id = ? , user_id = ? , jasa_id = ?, tanggal_booking = ?,transaction_date = ?' 
    	var token = req.body.token         
        jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
            return res.send({status: 401, message: 'invalid_token'});
        	}else{
        	var user_id = decoded.user_id
    		req.getConnection(function(err,connection){
	        connection.query(queryJasa,[jasa_id],function(err,rows){
		        if(err) console.log("Error Selecting : %s ", err);	
		        else{
		        	var pemandu_id = rows[0].pemandu_id
		        	var status_avail = rows[0].status_avail 
		        	req.getConnection(function(err,connection){
	        			connection.query(queryPemandu,[user_id],function(err,rows){  
	        				if(err) console.log("Error Selecting : %s ", err); 
	        				if(pemandu_id == rows[0].pemandu_id ){
	        					res.json({status: 401, message: 'Pemandu tidak bisa memesan Jasa sendiri'});
	        				}else if(status_avail == 0){
	        					res.json({status: 401, message: 'Jasa sedang tidak tersedia'});
	        				}else{
	        					req.getConnection(function(err,connection){
				       				connection.query(queryCheckTransaksi,[jasa_id,tanggal_booking,4],function(err,rows){
							        	if(err) console.log("Error Selecting : %s ", err);	
							       		if(rows.length){
							       			res.json({status: 401, message: 'Jasa Sudah di Booking oleh wisatawan lain pada tanggal yang sama'});
							       		}else{					        	
							        		 req.getConnection(function(err,connection){
							       				connection.query(queryAddTransaksi,[pemandu_id,user_id,jasa_id,tanggal_booking,transaction_date],function(err,rows){
										        	if(err) console.log("Error Selecting : %s ", err);	
										       		else{					        	
										        		res.json({status:200, message: 'Success Transaksi Jasa' });   
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

// Konfirmasi transaksi Jasa sedang dipakai oleh pemandu
// route = api/transaksiJasa/pemandu/konfirmasi/:transaction_id
// Konfirmasi ini dilakukan oleh pemandu
transaksiJasaController.konfirmasiTransaksiSedangDipakai = (req, res) => {	
	var transaction_id = req.params.transaction_id
	var queryPemandu = "SELECT * FROM pemandu WHERE user_id = ?"		
	var queryTransaksi = "SELECT * FROM transaksi_jasa WHERE transaction_id = ?"
	var queryUpdateStatusKonfirmasi = "UPDATE transaksi_jasa SET transaction_status = ? WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!req.headers.authorization) {
        		res.status(401).json({status: false, message: 'Please Login !'});
    		}else if (rows[0].transaction_status < 2){
				res.status(400).json({status:400,success:false,message:'Status transaksi : Wisatawan belum melakukan pembayaran dan upload bukti pembayaran'});
			}else if(rows[0].transaction_status == 3){
				res.status(400).json({status:400,success:false,message:'Status transaksi : Sudah dikonfirmasi jasa sedang dipakai wisatawan'});
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
											connection.query(queryUpdateStatusKonfirmasi,[3,transaction_id],function(err,rows){
												if(err) console.log("Error Selecting : %s ", err);				
												res.json({status:200,success:true,message:'Konfirmasi Jasa sedang dipakai Success'});					
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

// Konfirmasi transaksi Jasa selesai dipakai oleh wisatawan
// route = api/transaksiJasa/user/konfirmasi/:transaction_id
// Konfirmasi ini dilakukan oleh wisatawan
transaksiJasaController.konfirmasiTransaksiSelesaiDipakai = (req, res) => {	
	var transaction_id = req.params.transaction_id	
	var queryUser = "SELECT * FROM user WHERE user_id = ?"			
	var queryTransaksi = "SELECT * FROM transaksi_jasa WHERE transaction_id = ?"
	var queryUpdateStatusKonfirmasi = "UPDATE transaksi_jasa SET transaction_status = ? WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!req.headers.authorization) {
        		res.status(401).json({status: false, message: 'Please Login !'});
    		}else if (rows[0].transaction_status < 3){
				console.log(rows[0].transaction_status)
				res.status(400).json({status:400,success:false,message:'Status transaksi : Belum dikonfirmasi pemakaian oleh pemandu'});
			}else if(rows[0].transaction_status == 4){
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
									connection.query(queryUpdateStatusKonfirmasi,[4,transaction_id],function(err,rows){
										if(err) console.log("Error Selecting : %s ", err);				
										res.json({status:200,success:true,message:'Konfirmasi Pemakaian Jasa oleh User Success'});					
									});
								});
							}	
			        	}
			        });
					
			}
		});
	});
}

// Cancel transaksi  //route = api/transaksijasa/cancel/:transaction_id
// Cancel ini dilakukan oleh user
transaksiJasaController.cancelTransaksibyUser = (req, res) => {
	var transaction_id = req.params.transaction_id
	var queryTransaksi = "SELECT * FROM transaksi_jasa WHERE transaction_id = ?"
	var queryCancelTransaksi = "DELETE FROM transaksi_jasa WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!rows.length){
				res.status(400).json({status:400,success:false,message:'Transaksi tidak dapat di temukan'});
			}else if(!req.headers.authorization) {
        		res.status(401).json({status: false, message: 'Please Login !'});
    		}else if(rows[0].transaction_status != 0){
				res.status(400).json({status:400,success:false,message:'Transaksi telah di verifikasi, tidak dapat di Cancel'});
			}else{
				var token = req.headers.authorization    
				//JWT VERIFY     
			        jwt.verify(token, secret, function(err, decoded) {
			        	if(err) {
			           	 return res.status(401).send({auth :false,message: 'invalid_token'});
			        	}else{
						var user_id = decoded.user_id
							if(user_id != rows[0].user_id){
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
							
			        	}
			        });
			}			
		});
	});
}		
    


module.exports = transaksiJasaController