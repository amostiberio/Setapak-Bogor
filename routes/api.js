var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

var wisatawanControllers = require('../controllers/wisatawanControllers');
var produkController = require('../controllers/produkControllers');

var APIRoutes = function () {

	// Router User
    router.get('/users', wisatawanControllers.getUser);
    router.get('/users/:id', wisatawanControllers.getUserById);
    router.post('/users/create',wisatawanControllers.createUser);
    router.post('/users/edit/:id',wisatawanControllers.updateUserById);
    router.post('/users/delete/:id',wisatawanControllers.deleteUserById);

    // Router Produk
    router.get('/produks',produkController.getProduk);    
    router.get('/produks/:id', produkController.getProdukById);
    router.post('/produks/create/:id',produkController.createProduk);
    router.post('/produks/edit/:id',produkController.updateProdukById);
    router.post('/produks/delete/:id',produkController.deleteProdukById);


    return router;
};

module.exports = APIRoutes;