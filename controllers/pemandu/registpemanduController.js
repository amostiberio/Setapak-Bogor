var registpemanduController = {}
var shortcutFunction = require('../programs/shortcutFunction')
var authController = require("../authControllers")
var secret = require('../settings/jwt').secret
var jwt = require('jsonwebtoken');

registpemanduController.register = function(req, res) {
    console.log("Masuk Sini")
    var payload = shortcutFunction.authToken();
        currentUserId = payload.user_id
        provinsi = "Jawa Barat"
        kabupaten = "Kab. Bogor"
        kecamatan = req.body.kecamatan

        nama_company = req.body.nama_tour
        alamat = req.body.alamat
        deskripsi = req.body.deskripsi
        pemandu_status = req.body.active_status

        var token = req.headers.authorization

        if(!req.headers.authorization) {
            res.status(401).json({status: false, message: 'Please Login !'});
        } else {
            var queryWriteRegisPemandu = "INSERT INTO pemandu set user_id = ?, alamatcategory_id = ?, nama_company = ?, alamat = ? deskripsi = ?, pemandu_status = ?, pemandu_verifikasi = ?, photo = ?"
            var queryGetDaerahAlamat = 'SELECT alamatcategory_id FROM alamatcategory WHERE provinsi = ? AND kabupaten = ? AND kecamatan = ?';    
        }
        req.getConnection(function(err, conn) {
            conn.query(queryGetDaerahAlamat, [provinsi, kabupaten, kecamatan], function(err, row) {
                if(err) 
                    console.log("error selecting %s", err)
                if(row.length) {
                    daerahalamat_id = row[0].alamatcategory_id
                    req.getConnection(function(err, conn) {
                        conn.query(queryWriteRegisPemandu, [user_id, daerahalamat_id, nama_company, alamat, deskripsi, 90, 0, "tes/img/ini hanya tes/asik.jpg"], function(err, res) {
                            if(err) {
                                console.log(err)
                            }
                            else {
                                console.log(result);
                                res.status(200).json({ status: true ,message: 'Sukses Mendaftar' });
                            }
                        })
                    })
                }
            })
        })

}
