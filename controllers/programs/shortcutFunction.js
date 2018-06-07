var jwt = require('jsonwebtoken');
var secret = require('./../settings/jwt').secret

var shortcutFunction = {}


shortcutFunction.authToken = (token) => {

	var valid;
    var payload = jwt.decode(token)
    var bearer = token.split(" ");
    var splittedToken = bearer[1];   
    jwt.verify(splittedToken, secret, function(err,results){
    		if (err){
                console.log(err);
                

            } else {
                return payload
                next();
            }
    });
}

module.exports = shortcutFunction

// jwt terbagi 3 = header.data.secret_key

// payload = login id, email