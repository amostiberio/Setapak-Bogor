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
      
    router.get('/homestay/:homestay_id',homestayController.getOneHomestay);
    router.post('/homestay/search',homestayController.searchHomestay);
    router.get('/homestay/pemandu/:pemandu_id',homestayController.getPemanduHomestay);   
    router.post('/homestay/pemandu/add',homestayController.addHomestay); 
    router.post('/homestay/pemandu/update/:homestay_id',homestayController.updateHomestay);
    router.post('/homestay/pemandu/delete/:homestay_id',homestayController.deleteHomestay);
    router.post('/homestay/pemandu/uploadphoto/:homestay_id',homestayController.uploadPhoto);
    

    //view category , sort
    //

    // Router Transaksi Homestay
    router.post('/transaksiHomestay/pesanHomestay/:homestay_id',transaksiHomestayController.pesanHomestay);
    router.post('/transaksiHomestay/verify/:transaction_id',transaksiHomestayController.verifikasiTransaksi);
    router.post('/transaksiHomestay/cancel/:transaction_id',transaksiHomestayController.cancelTransaksibyUser);

     // Router Transaksi
    router.get('/history',historyController.getAllUserHistoryTransactions);
    router.get('/historyByCategory/:category',historyController.getUserHistoryTransactionsByCategory);

     // Router Produk
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