var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

// var authController = require('../controllers/authControllers');
var wisatawanController = require('../controllers/wisatawanControllers');
var homestayController = require('../controllers/homestayControllers');
var jasaController = require('../controllers/jasaControllers');
var barangController = require('../controllers/barangControllers');

var transaksiHomestayController = require('../controllers/transaksiHomestayControllers');
var transaksiJasaController = require('../controllers/transaksiJasaControllers');
var transaksiBarangController = require('../controllers/transaksiBarangControllers');

var testingController = require('../controllers/testingControllers');
var uploadController = require('../controllers/uploadControllers');
var emailController = require('../controllers/emailControllers');

//var notifikasiController = require('../controllers/notifikasiControllers');

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

    //Router Jasa
    router.get('/jasa/:jasa_id',jasaController.getOneJasa);
    router.get('/jasa/pemandu/:pemandu_id',jasaController.getPemanduJasa);

    //Router Barang
    router.get('/barang/:barang_id',barangController.getOneBarang);
    router.get('/barang/pemandu/:pemandu_id',barangController.getPemanduBarang);

    // Router Transaksi Homestay
    // router.get('/transaksiHomestay/user/historyTransaksiku/:transaction_status',transaksiHomestayController.historyTransaksibyStatus);
    router.post('/transaksiHomestay/user/pesanHomestay/:homestay_id',transaksiHomestayController.pesanHomestay);
    router.get('/transaksiHomestay/pemandu/konfirmasi/:transaction_id',transaksiHomestayController.konfirmasiTransaksiSedangDipakai); //jadi status 2
    router.get('/transaksiHomestay/user/konfirmasi/:transaction_id',transaksiHomestayController.konfirmasiTransaksiSelesaiDipakai); //jadi status 3
    router.get('/transaksiHomestay/user/cancel/:transaction_id',transaksiHomestayController.cancelTransaksibyUser);
    router.get('/transaksiHomestay/user/historytransaksiku',transaksiHomestayController.historyku);
    router.get('/transaksiHomestay/user/historytransaksiku/:status',transaksiHomestayController.historyTransaksibyStatus);

    // Router Transaksi Jasa
    router.post('/transaksiJasa/user/pesanJasa/:jasa_id',transaksiJasaController.pesanJasa);
    router.get('/transaksiJasa/user/konfirmasi/:transaction_id',transaksiJasaController.konfirmasiTransaksiSelesaiDipakai); //jadi status 3
    router.get('/transaksiJasa/user/cancel/:transaction_id',transaksiJasaController.cancelTransaksibyUser);
    router.get('/transaksiJasa/user/historytransaksiku',transaksiJasaController.historyku);
    router.get('/transaksiJasa/user/historytransaksiku/:status',transaksiJasaController.historyTransaksibyStatus);

    // Router Transaksi Barang
    router.post('/transaksiBarang/user/pesanBarang/:barang_id',transaksiBarangController.pesanBarang);
    router.get('/transaksiBarang/user/konfirmasi/:transaction_id',transaksiBarangController.konfirmasiTransaksiBarangSampai); //jadi status 3
    router.get('/transaksiBarang/user/cancel/:transaction_id',transaksiBarangController.cancelTransaksibyUser);
    router.get('/transaksiBarang/user/historytransaksiku',transaksiBarangController.historyku);
    router.get('/transaksiJasa/user/historytransaksiku/:status',transaksiJasaController.historyTransaksibyStatus);

    
    // Router Upload
    router.post('/user/upload/buktipembayaran/barang/:transaction_id',uploadController.buktiPembayaranBarang);
    router.post('/user/upload/buktipembayaran/homestay/:transaction_id',uploadController.buktiPembayaranHomestay);
    router.post('/user/upload/buktipembayaran/jasa/:transaction_id',uploadController.buktiPembayaranJasa);
    router.post('/user/upload/userphoto',uploadController.userPhoto);
    router.post('/pemandu/upload/homestay/:homestay_id',uploadController.homestayMultiplePhoto);


    // Email Controller
    router.post('/forgetpassword',emailController.forgetPassword);
    
    //Router Notifikasi
    //router.get('/notifkasi/get',notifikasiController.getNotfikasi);
    //router.get('/notifkasi/:notifikasi_id',notifikasiController.getNotfikasi);


    // Router Testing function
    router.post('/testing',testingController.test);

    return router;
};

module.exports = APIRoutes;