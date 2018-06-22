var token = req.headers.authorization    
	//JWT VERIFY     
        jwt.verify(token, secret, function(err, decoded) {
        	if(err) {
            return res.status(401).send({message: 'invalid_token'});
        	}else{
        	var user_id = decoded.user_id
        	}
        });

transaksiHomestayController.historyTransaksibyStatus = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
    	var transaction_status = req.params.transaction_status
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