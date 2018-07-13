var transaksiBarangController = {}
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
	
	status Barang
	(status 0 = user belum bayar) [setelah transaksi ditambah]
	(status 1 = user sudah bayar + upload resi) [Actor : user , uploadbuktipembayaran]
	(status 2 = pembayaran valid) [Actor : Admin , validasiPembayaran]
	(status 3 = Pemandu sudah kirim barang + upload resi) [Actor : Pemandu, konfirmasiPemakaian]
	(status 4 = User sudah menerima barang) [Actor : user, konfirmasiPemakaianKelar]
	(status 3 = Admin sudah transfer uang ke pemandu + transaksi selesai) [Actor : admin, dibayar]

*/

// Get Semua History Transaksi Barang //route = api/transaksiBarang/user/transaksiaktif
transaksiBarangController.transaksiaktif = (req, res) => {
    if(!req.body.token){
        res.json({status: 401, message: 'Please Login !'});
    }else{
    	var token = req.body.token  
		//JWT VERIFY     
        jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
           		 return res.send({ status: 401, message: 'invalid_token'});
        	}else{
        	var user_id = decoded.user_id
        	var status_kelar = 6;
        	var querySelectTransactions = 'SELECT * FROM transaksi_barang WHERE user_id = ? AND NOT transaction_status = ? ORDER BY transaction_date DESC  '	    
			    req.getConnection(function(err,connection){
			    	connection.query(querySelectTransactions,[user_id,status_kelar],function(err,rows){ //get pemandu id
			    	  	if(err)
			               console.log("Error Selecting : %s ", err);
			            if(rows.length){
			            	res.json({status: 200, message: 'Sukses Ambil Transaksi', data: rows});	            
			            }else{
			            	res.json({status: 204, message: 'Kamu tidak mempunyai transaksi Barang'});
			            }
			    	});
			    }); 
        	}
        }); 
    }
}

// Get Semua History Transaksi Barang //route = api/transaksiBarang/user/history
transaksiBarangController.history = (req, res) => {
    if(!req.body.token){
        res.json({status: 401, message: 'Please Login !'});
    }else{
    	var token = req.body.token  
		//JWT VERIFY     
        jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
           		 return res.send({ status: 401, message: 'invalid_token'});
        	}else{
        	var user_id = decoded.user_id
        	var status_kelar = 6;
        	var querySelectTransactions = 'SELECT * FROM transaksi_barang WHERE user_id = ? AND transaction_status = ? ORDER BY transaction_date DESC '	    
			    req.getConnection(function(err,connection){
			    	connection.query(querySelectTransactions,[user_id,status_kelar],function(err,rows){ //get pemandu id
			    	  	if(err)
			               console.log("Error Selecting : %s ", err);
			            if(rows.length){
			            	res.json({status: 200, message: 'Sukses Ambil Transaksi', data: rows});	            
			            }else{
			            	res.json({status: 204, message: 'Kamu belum mempunyai transaksi Barang Selesai'});
			            }
			    	});
			    }); 
        	}
        }); 
    }
}

// Get nama data dari alamat category//router = api/transaksiBarang/user/transaksibyid/:transaction_id
transaksiBarangController.transaksibyid= (req, res) => {	   		  
	var transaction_id = req.params.transaction_id
	var querySelectTransaction  = 'SELECT * FROM transaksi_barang WHERE transaction_id = ?'    	  	
	req.getConnection(function(err,connection){
		connection.query(querySelectTransaction,[transaction_id],function(err,rows){ //get pemandu id
			if(err)
			   console.log("Error Selecting : %s ", err);
			if(rows.length){	            	
				res.json({status: 200, message: 'Sukses', data: rows[0]});
			}else{
		        res.json({status: 204, message: 'Transaksi Barang tidak ditemukan'});
		     }
		});
	});   
}



// Get Semua History Transaksi jasa berdasarkan status //route = api/transaksijasa/user/historyTransaksiku/:transaction_status
transaksiBarangController.historyTransaksibyStatus = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else if(!req.params.status) {
        res.status(401).json({status: false, message: 'Something missing (status)!'});
    }else{
		var transaction_status = req.params.status
		var noteStatus = shortcutFunction.statusBarangTransaksiUser(transaction_status);		
    	var token = req.headers.authorization    
		//JWT VERIFY     
	        jwt.verify(token, secret, function(err, decoded) {
	        	if(err) {
	            return res.status(401).send({message: 'invalid_token'});
	        	}else{
	        	var user_id = decoded.user_id
	        	var querySelectTransactions = 'SELECT * FROM transaksi_barang WHERE user_id = ? AND transaction_status = ?'	    
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

// Add Transaksi Barang //route = api/transaksibarang/user/pesanbarang/:barang_id
transaksiBarangController.pesanBarang = (req, res) => {
	//total harga = math.ceil(total berat) *harga(tipe) reg,oke,yes
	// total berat = jumlahbarang * berat_gram
	var barang_id = req.params.barang_id,
		tarif_id = req.body.tarif_id
		jumlah_barang = req.body.jumlah_barang,
		alamatpengiriman = req.body.alamatpengiriman,		
		type_pengiriman = req.body.paket_pengiriman,
		noteswisatawan = req.body.noteswisatawan		
		transaction_date = moment_timezone().tz("Asia/Jakarta").format('YYYY/MM/DD HH:mm:ss')
		
    if(!req.body.token) {
        res.json({status: 401, message: 'Please Login !'});
    }else if (!barang_id){
    	res.json({status: 400, message: 'Something missing (ID Jasa)!'});
    }else{
	var queryTarif = 'SELECT * FROM tarif WHERE tarif_id = ?'
    var queryBarang = 'SELECT * FROM barang WHERE barang_id = ?'
    var queryCheckPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
    var queryAddTransaksi = 'INSERT INTO transaksi_barang SET  pemandu_id = ? , user_id = ? , barang_id = ?,tarif_id = ?,jumlah_barang =?,alamatpengiriman=?,paket_pengiriman=?, ongkos_kirim = ?, total_harga =?, transaction_date = ?, noteswisatawan =?' 
    	var token = req.body.token        
        jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
            return res.json({status: 401,message: 'invalid_token'});
        	}else{
			var user_id = decoded.user_id
			req.getConnection(function(err,connection){
				connection.query(queryTarif,[tarif_id],function(err,rows){	
					var ongkos_kirim;							
					if(type_pengiriman === "REG"){
						 ongkos_kirim = rows[0].reg
					}else if(type_pengiriman === "OKE"){
						 ongkos_kirim = rows[0].oke
					}else if(type_pengiriman === "YES"){
						 ongkos_kirim = rows[0].yes
					}					
					if(ongkos_kirim == 0){
						res.json({status: 400, message: 'Maaf Layanan Tipe Pengiriman tersebut belum tersedia'});
					}else{
						req.getConnection(function(err,connection){
							connection.query(queryBarang,[barang_id],function(err,rows){
								if(err) console.log("Error Selecting : %s ", err);
								if(rows[0].kuantitas < jumlah_barang){
									res.json({status: 400, message: 'Kuantitas barang yang tersedia tidak cukup untuk pesanan anda'});
								}else{
									var pemandu_id = rows[0].pemandu_id
									var total_berat = Math.ceil(jumlah_barang * rows[0].berat_gram/1000)
									var total_ongkos_kirim = total_berat * ongkos_kirim
									var total_harga = (rows[0].harga * jumlah_barang) + total_ongkos_kirim
									
									req.getConnection(function(err,connection){
										connection.query(queryCheckPemandu,[user_id],function(err,rows){  
											if(err) console.log("Error Selecting : %s ", err); 
											if(pemandu_id == rows[0].pemandu_id ){
												res.json({status: 400, message: 'Pemandu tidak bisa memesan Jasa sendiri',pemandu_id:pemandu_id,checkpemandu:rows[0].pemandu_id });
											}else{
												req.getConnection(function(err,connection){
													connection.query(queryAddTransaksi,[pemandu_id,user_id,barang_id,tarif_id,jumlah_barang,alamatpengiriman,type_pengiriman,total_ongkos_kirim,total_harga,transaction_date,noteswisatawan],function(err,rows){
													 	if(err) console.log("Error Selecting : %s ", err);	
														else{					        	
														 	res.json({status:200,message: 'Success Transaksi Jasa' });   
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



// Konfirmasi transaksi Barang selesai dipakai oleh wisatawan
// route = api/transaksiBarang/user/konfirmasi/:transaction_id
// Konfirmasi ini dilakukan oleh wisatawan
transaksiBarangController.konfirmasiTransaksiBarangSampai = (req, res) => {	
	var transaction_id = req.params.transaction_id	
	var queryUser = "SELECT * FROM user WHERE user_id = ?"			
	var queryTransaksi = "SELECT * FROM transaksi_barang WHERE transaction_id = ?"
	var queryUpdateStatusKonfirmasi = "UPDATE transaksi_barang SET transaction_status = ? WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!req.body.token) {
        		res.json({status: 401, message: 'Please Login !'});
    		}else if (rows[0].transaction_status < 4){
				res.json({status:400,success:false,message:'Status transaksi : Penjual belum konfirmasi pengiriman barang'});
			}else if(rows[0].transaction_status == 5){
				res.json({status:400,success:false,message:'Status transaksi : Sudah dikonfirmasi barang sampai oleh User'});
			}else{		
				var token = req.body.token
				//JWT VERIFY     
			        jwt.verify(token, secret, function(err, decoded) {
			        	if(err) {
			            return res.json({status: 401,message: 'invalid_token'});
			        	}else{
			        	var user_id = decoded.user_id
						let user_idTransaksi = rows[0].user_id
							if(user_id != user_idTransaksi){
								res.json({status:403, success:false, message:'Forbidden Otorisasi'});
							}else{
								req.getConnection(function(err,connection){
									connection.query(queryUpdateStatusKonfirmasi,[5,transaction_id],function(err,rows){
										if(err) console.log("Error Selecting : %s ", err);				
												res.json({status:200,success:true,message:'Konfirmasi Barang Sampai oleh User Success'});					
									});
								});
							}	
			        	}
			        });
			}
		});
	});
}

// Cancel transaksi  //route = api/transaksibarang/cancel/:transaction_id
// Cancel ini dilakukan oleh user
transaksiBarangController.cancelTransaksibyUser = (req, res) => {
	var transaction_id = req.params.transaction_id
	var queryTransaksi = "SELECT * FROM transaksi_barang WHERE transaction_id = ?"
	var queryCancelTransaksi = "DELETE FROM transaksi_barang WHERE transaction_id = ?"
	req.getConnection(function(err,connection){
		connection.query(queryTransaksi,[transaction_id],function(err,rows){
			if(err) console.log("Error Selecting : %s ", err);
			if(!rows.length){
				res.json({status:400,success:false,message:'Transaksi tidak dapat di temukan'});
			}else if(!req.body.token) {
        		res.json({status:401, message: 'Please Login !'});
    		}else if(rows[0].transaction_status != 0){
				res.json({status:400,success:false,message:'Transaksi telah di verifikasi, tidak dapat di Cancel'});
			}else{
				var token = req.body.token    
				//JWT VERIFY     
				jwt.verify(token, secret, function(err, decoded) {
					if(err) {
						return res.json({status: 401,message: 'invalid_token'});
					}else{
					var user_id = decoded.user_id
						if(user_id != rows[0].user_id){
							res.json({status:403,success:false,message:'Forbidden Otorisasi'});
						}else{
							req.getConnection(function(err,connection){
								connection.query(queryCancelTransaksi,[transaction_id],function(err,rows){
									if(err) console.log("Error Selecting : %s ", err);
									else{
										res.json({status:200,message:"Transaksi telah sukses dicancel"});
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
    


module.exports = transaksiBarangController