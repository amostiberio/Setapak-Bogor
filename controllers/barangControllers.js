var barangController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

// Get View Barang Satu Pemandu //router = api/Barang/:barang_id
barangController.getOneBarang = (req, res) => {
	var barang_id = req.params.barang_id
	var querySelectBarang  = 'SELECT * FROM barang WHERE barang_id = ?'
	var querySelectPemandu = 'SELECT * FROM pemandu WHERE pemandu_id = ?'
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectBarang,[barang_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var pemandu_id = rows[0].pemandu_id
	            	var dataBarang = rows[0]            			
		            	req.getConnection(function(err,connection){
					    	connection.query(querySelectPemandu,[pemandu_id],function(err,rows){ //get data Barang 
					    	  	if(err)
					               console.log("Error Selecting : %s ", err);
					            if(rows.length){
									var dataPemandu = rows[0]
									res.json({status: 200, message: 'Sukses Get Data Barang', dataBarang: dataBarang, dataPemandu : dataPemandu});					             					         
					            }
					    	});
					    });
	            }else{
					res.json({status: 401, message: 'Barang tidak ditemukan (Missing ID)'});
				}
	    	});
	    });
}

// Get All Barang Satu Pemandu //router = api/Barang/pemandu/:pemandu_id
barangController.getPemanduBarang = (req, res) => {		
   		var pemandu_id = req.params.pemandu_id    	
    	var querySelectPemandu  = 'SELECT * FROM pemandu WHERE pemandu_id = ?'
    	var querySelectBarang = 'SELECT * FROM Barang WHERE pemandu_id = ? AND kuantitas >= ? '	   	
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectPemandu,[pemandu_id],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	var data_pemandu = rows[0]	            	
	            	var nama_company = data_pemandu.nama_company
	            	var kuantitas = 1
	            	req.getConnection(function(err,connection){
				    	connection.query(querySelectBarang,[pemandu_id,kuantitas],function(err,rows){ //get data Barang 
				    	  	if(err)
				               console.log("Error Selecting : %s ", err);
				            if(rows.length){	            	
				            	res.status(200).json({status: true, message: 'Data Barang untuk Pemandu',nama_company : nama_company, data: rows});					      
				            }else{
				            	res.status(401).json({status: false, message: 'Tidak ada Barang yang tersedia dari Pemandu',nama_company});

				            }
				    	});
				    });
	            }
	    	});
	    });   
}

barangController.searchBarang  = (req, res) =>{
 var querySelectAllBarang = 'SELECT * FROM barang WHERE status_avail = ?'
 var querySelectBarangKeyword = 'SELECT * FROM barang WHERE status_avail = ? AND nama_barang Like ? ORDER BY nama_barang'
 	 if(req.body.keyword != null && req.body.keyword != ''){
 	 	var keyword = req.body.keyword
 		req.getConnection(function(err,connection){
			connection.query(querySelectBarangKeyword,[1,'%' + keyword + '%'],function(err,results){
				if(err){
					console.log("Error Selecting : %s ", err);
				}else if(results.length){
					res.json({status:200,message:'Search Suksesa', data: results});	
				}else{
					res.json({status:404, message: 'Tidak ditemukan barang dengan keyword tersebut' });
				}
			});
		});
 	}else{
 		req.getConnection(function(err,connection){
			connection.query(querySelectAllBarang,[1],function(err,results){
				if(err){
					console.log("Error Selecting : %s ", err);
				}else if(results.length){
					res.json({status:200,message:'Search Sukses', data: results});								
				}else{
					res.json({status:404, message: 'Tidak ada Barang yang tersedia' });
				}					
				
			});
		});
 	}
}

module.exports = barangController;