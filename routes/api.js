var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

// var authController = require('../controllers/authControllers');
var wisatawanController = require('../controllers/wisatawanControllers');
var produkController = require('../controllers/produkControllers');
var homestayController = require('../controllers/homestayControllers');
var transaksiHomestayController = require('../controllers/transaksiHomestayControllers');
var historyController = require('../controllers/historyControllers');
var testingController = require('../controllers/testingControllers');
var uploadController = require('../controllers/uploadControllers');
var notifikasiController = require('../controllers/notifikasiControllers');

var APIRoutes = function () {


    // Router Auth

    // Router User
    router.get('/user/profile', wisatawanController.getUserProfile);
    router.post('/user/updateprofile',wisatawanController.updateProfileUserById);
    router.post('/user/changepassword',wisatawanController.changePasswordUserById);
    router.post('/user/register',wisatawanController.registerUser);
    router.post('/user/login',wisatawanController.loginUser);
    //router.post('/user/uploadphoto',wisatawanController.uploadPhoto);
    // router.get('/users', wisatawanControllers.getUsers);
    // router.post('/user/delete/:id',wisatawanControllers.deleteUserById);
    // router.post('/user/create',wisatawanControllers.createUser);

    // Router Homestay // 
    //kurang //view category , sort  
    router.get('/homestay/:homestay_id',homestayController.getOneHomestay);
    router.post('/homestay/search',homestayController.searchHomestay);
    router.get('/homestay/pemandu/:pemandu_id',homestayController.getPemanduHomestay); //view punya orang
        //pemandu//
    router.get('/pemandu/homestay/all',homestayController.getHomestayKu); //view punya sendiri sebagai pemandu
    router.post('/pemandu/homestay/add',homestayController.addHomestay); 
    router.post('/pemandu/homestay/update/:homestay_id',homestayController.updateHomestay);
    router.post('/pemandu/homestay/delete/:homestay_id',homestayController.deleteHomestay);
    router.post('/pemandu/homestay/uploadphoto/:homestay_id',homestayController.uploadPhoto);

    // Router Transaksi Homestay
    router.post('/transaksiHomestay/user/pesanHomestay/:homestay_id',transaksiHomestayController.pesanHomestay);
    router.get('/transaksiHomestay/pemandu/konfirmasi/:transaction_id',transaksiHomestayController.konfirmasiTransaksiSedangDipakai); //status 2
    router.get('/transaksiHomestay/user/konfirmasi/:transaction_id',transaksiHomestayController.konfirmasiTransaksiSelesaiDipakai); //status 3
    router.get('/transaksiHomestay/user/cancel/:transaction_id',transaksiHomestayController.cancelTransaksibyUser);

     // Router History
    router.get('/history',historyController.getAllUserHistoryTransactions);
    router.get('/historyByCategory/:category',historyController.getUserHistoryTransactionsByCategory);

    // Router Upload

    router.post('/user/upload/buktipembayaran/homestay/:transaction_id',uploadController.buktiPembayaranHomestay);
    router.post('/user/upload/userphoto',uploadController.userPhoto);
    router.post('/pemandu/upload/homestay/:homestay_id',uploadController.homestayMultiplePhoto);

    //Router Notifikasi
    router.get('/notifkasi/get',notifikasiController.getNotfikasi);
    router.get('/notifkasi/:notifikasi_id',notifikasiController.getNotfikasi);

     // router Produk
    router.get('/produks',produkController.getProduk);    
    router.get('/produks/:id', produkController.getProdukById);
    router.post('/produks/create/:id',produkController.createProduk);
    router.post('/produks/update/:id',produkController.updateProdukById);
    router.post('/produks/delete/:id',produkController.deleteProdukById);

    // Router Testing function
    router.post('/testing',testingController.test);

    return router;
};

module.exports = APIRoutes;