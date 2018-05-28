var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

// var authController = require('../controllers/authControllers');
var wisatawanController = require('../controllers/wisatawanControllers');
var produkController = require('../controllers/produkControllers');
var homestayController = require('../controllers/homestayControllers');

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
    router.get('/homestay',homestayController.getPemanduHomestay);
    router.get('/homestay/:homestay_id',homestayController.getOneHomestay);
    router.post('/homestay/add',homestayController.addHomestay);
    router.post('/homestay/update/:homestay_id',homestayController.updateHomestay);
    router.post('/homestay/delete/:homestay_id',homestayController.deleteHomestay);
    router.post('/homestay/uploadphoto/:homestay_id',homestayController.uploadPhoto);
    router.post('/homestay/search',homestayController.searchHomestay);

    
    // Router Produk
    router.get('/produks',produkController.getProduk);    
    router.get('/produks/:id', produkController.getProdukById);
    router.post('/produks/create/:id',produkController.createProduk);
    router.post('/produks/update/:id',produkController.updateProdukById);
    router.post('/produks/delete/:id',produkController.deleteProdukById);


    return router;
};

module.exports = APIRoutes;