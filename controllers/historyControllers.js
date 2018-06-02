var historyController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

/*transaction status
	0 = Belum Di konfirmasi Pemandu
	1 =	Konfirmasi
	
	produk id
	JS = Jasa
	HM = Homestay
	PD = Produk 

*/ 

historyController.getAllUserHistoryTransactions = (req, res) => {
	var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id 	
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
    	var querySelectTransactions = 'SELECT * FROM transactions WHERE user_id = ?'	    
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
}


historyController.getUserHistoryTransactionsByCategory = (req, res) => {
	var token = req.headers.authorization,
     	decodedToken = shortcutFunction.decodeToken(token),   
     	user_id = decodedToken.user_id
    var category = req.params.category //HM PD JS
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
    	var querySelectTransactions = 'SELECT * FROM transactions WHERE user_id = ? AND produk_id LIKE ?'	    
	    req.getConnection(function(err,connection){
	    	connection.query(querySelectTransactions,[user_id,'%'+category+'%'],function(err,rows){ //get pemandu id
	    	  	if(err)
	               console.log("Error Selecting : %s ", err);
	            if(rows.length){
	            	res.status(200).json({status: true, message: 'Sukses Ambil Transaksi User', data: rows});	            
	            }
	    	});
	    });  
    }
}

module.exports = historyController;