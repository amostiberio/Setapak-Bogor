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
var alamatController = require ('../controllers/alamatControllers');
var pictureController = require ('../controllers/picturesControllers');
var diskusiController = require ('../controllers/diskusiControllers');
var commentDiskusiController = require ('../controllers/commentDiskusiControllers');
var reviewController = require ('../controllers/reviewControllers');

//var notifikasiController = require('../controllers/notifikasiControllers');

var APIRoutes = function () {


    // Router Auth

    // Router User
    router.get('/user/profile/:user_id', wisatawanController.getUserData);
    router.post('/user/updateprofile',wisatawanController.updateProfileUserById);
    router.post('/user/changepassword',wisatawanController.changePasswordUserById);
    router.post('/user/register',wisatawanController.registerUser);
    router.post('/user/login',wisatawanController.loginUser);
    router.get('/user/profilepemandu/:pemandu_id',wisatawanController.getDataPemandu);

    //router.post('/user/uploadphoto',wisatawanController.uploadPhoto);
    // router.get('/users', wisatawanControllers.getUsers);
    // router.post('/user/delete/:id',wisatawanControllers.deleteUserById);
    // router.post('/user/create',wisatawanControllers.createUser);

    // Router Homestay // 
    //kurang  category , sort  
    router.get('/homestay/:homestay_id',homestayController.getOneHomestay);
    router.post('/homestay/search',homestayController.searchHomestay);
    router.get('/homestay/pemandu/:pemandu_id',homestayController.getPemanduHomestay); //view punya orang
    router.get('/homestay/fasilitas/:fasilitas_id',homestayController.getDataFasilitas);

    //pemandu//
    router.get('/pemandu/homestay/all',homestayController.getHomestayKu); //view punya sendiri sebagai pemandu
    router.post('/pemandu/homestay/add',homestayController.addHomestay); 
    router.post('/pemandu/homestay/update/:homestay_id',homestayController.updateHomestay);
    router.post('/pemandu/homestay/delete/:homestay_id',homestayController.deleteHomestay);
    router.post('/pemandu/homestay/uploadphoto/:homestay_id',homestayController.uploadPhoto);

    //Router Jasa
    router.get('/jasa/:jasa_id',jasaController.getOneJasa);
    router.post('/jasa/search',jasaController.searchJasa);
    router.get('/jasa/pemandu/:pemandu_id',jasaController.getPemanduJasa);

    //Router Barang
    router.get('/barang/:barang_id',barangController.getOneBarang);
    router.get('/barang/pemandu/:pemandu_id',barangController.getPemanduBarang);
    router.post('/barang/search',barangController.searchBarang);


    // Router Transaksi Homestay
    // router.get('/transaksiHomestay/user/historyTransaksiku/:transaction_status',transaksiHomestayController.historyTransaksibyStatus);
    router.post('/transaksiHomestay/user/pesanHomestay/:homestay_id',transaksiHomestayController.pesanHomestay);
    router.get('/transaksiHomestay/pemandu/konfirmasi/:transaction_id',transaksiHomestayController.konfirmasiTransaksiSedangDipakai); //jadi status 2
    router.post('/transaksiHomestay/user/konfirmasi/:transaction_id',transaksiHomestayController.konfirmasiTransaksiSelesaiDipakai); //jadi status 3
    router.post('/transaksiHomestay/user/cancel/:transaction_id',transaksiHomestayController.cancelTransaksibyUser);    
    router.post('/transaksiHomestay/user/transaksiaktif',transaksiHomestayController.transaksiaktif);
    router.post('/transaksiHomestay/user/history',transaksiHomestayController.history);
    router.get('/transaksiHomestay/user/transaksibyid/:transaction_id',transaksiHomestayController.transaksibyid);       
    router.get('/transaksiHomestay/user/historytransaksiku/:status',transaksiHomestayController.historyTransaksibyStatus);

    // Router Transaksi Jasa
    router.post('/transaksiJasa/user/pesanJasa/:jasa_id',transaksiJasaController.pesanJasa);
    router.post('/transaksiJasa/user/konfirmasi/:transaction_id',transaksiJasaController.konfirmasiTransaksiSelesaiDipakai); //jadi status 3
    router.post('/transaksiJasa/user/cancel/:transaction_id',transaksiJasaController.cancelTransaksibyUser);    
    router.post('/transaksiJasa/user/transaksiaktif',transaksiJasaController.transaksiaktif);
    router.post('/transaksiJasa/user/history',transaksiJasaController.history);
    router.get('/transaksiJasa/user/transaksibyid/:transaction_id',transaksiJasaController.transaksibyid);        
    router.get('/transaksiJasa/user/historytransaksiku/:status',transaksiJasaController.historyTransaksibyStatus);

    // Router Transaksi Barang
    router.post('/transaksiBarang/user/pesanBarang/:barang_id',transaksiBarangController.pesanBarang);
    router.post('/transaksiBarang/user/konfirmasi/:transaction_id',transaksiBarangController.konfirmasiTransaksiBarangSampai); //jadi status 3
    router.post('/transaksiBarang/user/cancel/:transaction_id',transaksiBarangController.cancelTransaksibyUser);    
    router.post('/transaksiBarang/user/transaksiaktif',transaksiBarangController.transaksiaktif);
    router.post('/transaksiBarang/user/history',transaksiBarangController.history);     
    router.get('/transaksiBarang/user/transaksibyid/:transaction_id',transaksiBarangController.transaksibyid);         
    router.get('/transaksiBarang/user/historytransaksiku/:status',transaksiJasaController.historyTransaksibyStatus);

    
    // Router Upload
    router.post('/user/upload/userphoto',uploadController.userPhoto);
    router.post('/user/upload/buktipembayaran/homestay',uploadController.fotoPembayaranHomestay);
    router.post('/user/upload/buktipembayaran/barang',uploadController.fotoPembayaranProduk);
    router.post('/user/upload/buktipembayaran/jasa',uploadController.fotoPembayaranJasa);
    // router.post('/user/upload/buktipembayaran/barang/:transaction_id',uploadController.buktiPembayaranBarang);
    // router.post('/user/upload/buktipembayaran/homestay/:transaction_id',uploadController.buktiPembayaranHomestay);
    // router.post('/user/upload/buktipembayaran/jasa/:transaction_id',uploadController.buktiPembayaranJasa);
    // router.post('/user/upload/userphoto/:user_id',uploadController.userPhoto);
    // router.post('/user/upload/uploaduser/:user_id',uploadController.uploadUser);
   


    router.post('/pemandu/upload/homestay/:homestay_id',uploadController.homestayMultiplePhoto);
    //router.post('/user/upload/userphotocoba',uploadController.uploadUser);


    //Alamat 
    router.get('/alamat/provinsi',alamatController.getProvinsi);
    router.get('/alamat/kabupaten',alamatController.getKabupaten);
    router.get('/alamat/kecamatan',alamatController.getKecamatan);
    router.get('/alamat/category/:idalamat',alamatController.getDetailCategory);
    router.get('/alamat/provinsitarif',alamatController.getProvinsiTarif);
    router.post('/alamat/kabupatentarif',alamatController.getKabupatenTarif);
    router.post('/alamat/kecamatantarif',alamatController.getKecamatanTarif);
    router.post('/alamat/tarif',alamatController.dataTarif);

    //Picture 
    router.get('/picture/homestay/:idhomestay',pictureController.getHomestayPictures);
    router.get('/picture/jasa/:idjasa',pictureController.getJasaPictures)
    router.get('/picture/barang/:idbarang',pictureController.getBarangPictures)
    //Diskusi 
    router.get('/diskusi/produk/:produk_id',diskusiController.getDiskusiProduk);
    router.get('/diskusi/homestay/:produk_id',diskusiController.getDiskusiHomestay);
    router.get('/diskusi/jasa/:produk_id',diskusiController.getDiskusiJasa);
    router.post('/diskusi/count',diskusiController.countDiskusi);
    router.post('/diskusi/create',diskusiController.createDiskusi);
    router.post('/diskusi/delete',diskusiController.deleteDiskusi);
    

    //Comment 
    router.get('/comment/:diskusi_id',commentDiskusiController.getCommentsProduk);
    router.post('/comment/create',commentDiskusiController.createComment);
    router.post('/comment/delete',commentDiskusiController.deleteComment);
    
    //Review 
    router.post('/review/average',reviewController.countAvgReview);
    router.post('/review/all',reviewController.dataReviewsProduk);
    router.post('/review/addreview',reviewController.addReview);

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