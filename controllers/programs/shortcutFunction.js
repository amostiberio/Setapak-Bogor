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

shortcutFunction.statusHomestayTransaksiUser = (status) => {

    if(status == 0 || status == 1 || status == 2){
        return 'Status Pembayaran'
    }else  if(status == 3){
        return 'Jasa sedang berjalan'
    }else  if(status == 4){
        return 'Jasa sudah dipakai'
    }else  if(status == 5){
        return 'Transaksi telah selesai'
    }
}

shortcutFunction.statusJasaTransaksiUser = (status) => {

    if(status == 0 || status == 1 || status == 2){
        return 'Status Pembayaran'
    }else  if(status == 3){
        return 'Jasa sedang berjalan'
    }else  if(status == 4){
        return 'Jasa sudah dipakai'
    }else  if(status == 5){
        return 'Transaksi telah selesai'
    }
}
shortcutFunction.statusBarangTransaksiUser = (status) => {

    if(status == 0 || status == 1 || status == 2){
        return 'Status Pembayaran'
    }else  if(status == 3 || status == 4){
        return 'Status Pemesanan'
    }else  if(status == 4){
        return 'Status Konfirmasi Penerimaan'
    }else  if(status == 4){
        return 'Transaksi Selesai'
    }
}
module.exports = shortcutFunction

// jwt terbagi 3 = header.data.secret_key

// payload = login id, email