var authController = {}
var secret = require('./settings/jwt').secret
var token;

authController.logoutUser = (req, res) => {

	var queryCreateBlacklist = 'INSERT INTO blaclist SET blacklist = ?';

	//split bearer get only token
	tokenBlaclist = req.headers.authorization.split(' ')[1];
		req.getConnection(function(err,connection){
	    	connection.query(queryCreateBlacklist,[tokenBlaclist],function(err,rows){ 
	    			if(!err)
					{
						res.json({status:200,message:'Logout success'});
					}
					else 
					{
						res.json({status:400,message:err});
					}
	    		});
	    });
}


module.exports = authController