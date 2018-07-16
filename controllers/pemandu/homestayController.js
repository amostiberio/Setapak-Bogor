var homestayController = {}
var secret = require('../settings/jwt').secret
var shortcutFunction = require('../programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;

homestayController.pemanduAddHomestay = (req, res) => {
	var daerah_alamat_id = req.body.daerah_alamat_id
		provinsi = req.body.provinsi
		kabupaten = req.body.kabupaten
		kecamatan = req.body.kecamatan
	
	var fasilitas_id = req.body.fasilitas_id
		ac = req.body.ac
		car_park_count = req.body.parking
		bathroom_count = req.body.bathroom
		bedroom_count = req.body.bathroom_count
		
	var	nama_homestay = req.body.nama_homestay
		harga_perhari = req.body.harga_perhari
		deskripsi = req.boddy.deskripsi
		alamat_jalan= req.body.alamat_jalan

	var token = req.headers.authorization,     
		payload = shortcutFunction.authToken(token),        
		user_id = payload.user_id
	if(!req.headers.authorization) {
		res.status(401).json({status: false, message: 'Please Login !'});
	} else {
		var queryGetCurrentPemandu = 'SELECT * FROM pemandu WHERE user_id = ?'
		var queryCreateHomestay = 'INSERT INTO homestay SET pemandu_id = ?,fasilitas_id=?,alamatcategory_id=?, nama_homestay = ?, harga_perhari = ?, deskripsi = ?, alamat = ?';
		var queryCreateFasilitas = 'INSERT INTO fasilitas SET ac = ?, parking = ?, bathroom = ?, bedroom = ?, wifi =?';
		var queryDaerahAlamat = 'SELECT alamatcategory_id FROM alamatcategory WHERE provinsi = ? AND kabupaten = ? AND kecamatan = ?';

		req.getConnection(function(err, connection){
			connection.query(queryGetCurrentPemandu, [user_id], function(err, rows){
				if(err) 
					console.log("error selecting %s", err)
				if(rows.length) {
					var pemandu_id = rows[0].pemandu_id
						pemandu_status = rows[0].pemandu_status
						pemandu_verif = rows[0].pemandu_verifikasi

						if(!pemandu_status || !pemandu_verifikasi) {
							res.status(400).json({status: false, message: 'Status dan Verifikasi Pemandu belum di setujui'});
						}else if(!req.body.nama_homestay || !req.body.harga_perhari ||!req.body.deskripsi||!req.body.alamat_jalan||!req.body.provinsi || !req.body.kabupaten || !req.body.kecamatan|| !req.body.ac|| !req.body.parking|| !req.body.bathroom|| !req.body.bedroom|| !req.body.wifi) {
							res.status(400).json({status: false, message: 'Data Incomplete'});
						}
						else {
							req.getConnection(function(err,connection){
								connection.query(querySelectAlamatCategory,[provinsi,kabupaten,kecamatan],function(err,resultsAC){
									if(err) {
										console.log("Error Selecting : %s ", err);
									} else { 	     
										var fasilitas_id = results.insertId 
										req.getConnection(function(err,connection){
											connection.query(queryCreateHomestay,[pemandu_id,fasilitas_id,alamatcategory_id,nama_homestay,harga_perhari,deskripsi,alamat],function(err,results){
												if(err){
													console.log("Error Selecting : %s ", err);
												} else { 	     
													res.status(200).json({ status: true ,message: 'Success Create Homestay' });  
												}          
											});  
										});  
									}          
								})
							})
						}
				}
				else {
					res.status(400).json({status: false, message: 'Pemandu belum terdaftar, silahkan daftar menjadi pemandu terlebih dahulu'});
				}
			})
		})
	}		
}

module.exports = homestayController