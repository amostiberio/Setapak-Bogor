var jwt = require('jsonwebtoken');
var secret = require('./../settings/jwt').secret

var shortcutFunction = {}


shortcutFunction.authToken = (token) => {

	var valid;
    var payload = jwt.decode(token)
    var header = payload.header	
    valid = jwt.verify(token, secret, header);

	  if (!valid){
	  	res.status(400).json({status: false, message: 'Please Login'});
	  }else{
	  	return payload
	  }

	  

}

module.exports = shortcutFunction

// jwt terbagi 3 = header.data.secret_key

// payload = login id, email