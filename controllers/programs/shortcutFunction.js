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

shortcutFunction.statusHomestayUser = (status) => {

    if(status == 0){
        return 'Belum Transfer'
    }else  if(status == 1){ 
        return 'Menunggu Konfirmasi Admin'
    }else  if(status == 2){
        return 'Homestay sedang dipakai'
    }else  if(status == 3){
        return 'Homestay sudah dipakai'
    }else  if(status == 4){
        return 'Transaksi telah selesai'
    }
}

shortcutFunction.statusJasaUser = (status) => {

    if(status == 0){
        return 'Belum Transfer'
    }else  if(status == 1){ 
        return 'Menunggu Konfirmasi Admin'
    }else  if(status == 2){
        return 'Jasa sedang dipakai'
    }else  if(status == 3){
        return 'Jasa sudah dipakai'
    }else  if(status == 4){
        return 'Transaksi telah selesai'
    }
}
module.exports = shortcutFunction

// jwt terbagi 3 = header.data.secret_key

// payload = login id, email