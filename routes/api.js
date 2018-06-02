var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

// var authController = require('../controllers/authControllers');
var wisatawanController = require('../controllers/wisatawanControllers');
var produkController = require('../controllers/produkControllers');
var homestayController = require('../controllers/homestayControllers');
var transaksiController = require('../controllers/transaksiControllers');
var historyController = require('../controllers/historyControllers');

var APIRoutes = function () {


    // Router Auth

	// Router User
    router.get('/user/profile', wisatawanController.getUserProfile);
    router.post('/user/updateprofile',wisatawanController.updateProfileUserById);
    router.post('/user/changepassword',wisatawanController.changePasswordUserById);
    router.post('/user/register',wisatawanController.registerUser);
    router.post('/user/login',wisatawanController.loginUser);
    router.post('/user/uploadphoto',wisatawanController.uploadPhoto);
    // router.get('/users', wisatawanControllers.getUsers);
    // router.post('/user/delete/:id',wisatawanControllers.deleteUserById);
    // router.post('/user/create',wisatawanControllers.createUser);

    // Router Homestay
    //router.get('/homestay',homestayController.getAllHomestay);
    router.get('/homestay',homestayController.getPemanduHomestay); //belum kelar
    router.post('/homestay/add',homestayController.addHomestay);
    router.get('/homestay/:homestay_id',homestayController.getOneHomestay);   
    router.post('/homestay/update/:homestay_id',homestayController.updateHomestay);
    router.post('/homestay/delete/:homestay_id',homestayController.deleteHomestay);
    router.post('/homestay/uploadphoto/:homestay_id',homestayController.uploadPhoto);
    router.post('/homestay/search',homestayController.searchHomestay)

    // Router Transaksi
    router.post('/transaksi/pesanHomestay/:homestay_id',transaksiController.pesanHomestay);
    router.post('/transaksi/verify/:transaction_id',transaksiController.verifikasiTransaksi);
    router.post('/transaksi/cancel/:transaction_id',transaksiController.cancelTransaksibyUser);

     // Router Transaksi
    router.get('/history',historyController.getAllUserHistoryTransactions);
    router.get('/historyByCategory/:category',historyController.getUserHistoryTransactionsByCategory);

     // Router Produk
    router.get('/produks',produkController.getProduk);    
    router.get('/produks/:id', produkController.getProdukById);
    router.post('/produks/create/:id',produkController.createProduk);
    router.post('/produks/update/:id',produkController.updateProdukById);
    router.post('/produks/delete/:id',produkController.deleteProdukById);
    return router;
};

module.exports = APIRoutes;