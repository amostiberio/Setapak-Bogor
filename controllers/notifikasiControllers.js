var notifikasiController = {}
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var async = require('async');
var token;

notifikasiController.getNotfikasi = (req, res) => {
    if(req.role==2){
        Notifikasi.find({},'-_id -__v',{sort:{date_notification:-1}},function(err,notifikasi){
            if(notifikasi != []){
                setTimeout(function(){
                    res.status(200).json({status:200,message:"sukses ambil semua notifikasi",data:notifikasi,token:req.token});
                },100)	
            }else{
                res.status(204).json({status:204,message:"No data provided",token:req.token});
            }
        })
    }else{
        res.status(403).json({status:403,message:"Forbidden access for this user",token:req.token})
    }
}

notifikasiController.read = function(req,res){
    if(req.role==2){
        Notifikasi.findOne({notikasi_id:req.params.notikasi_id},function(err,notifikasi){
            if(notifikasi!=null){
                notifikasi.status_notificaiton = 1;
                notifikasi.save(function(err){
                    if(!err){
						res.status(200).json({status:200,success:true,message:'Notifikasi sudah dibaca',data:notifikasi,token:req.token});
					}else{
						res.status(400).json({status:400,success:false,message:err,token:req.token});
					}
                })
            }else{
                res.status(204).json({status:204,message:"Not Found",token:req.token});
            }
        })
    }else{
        res.status(403).json({status:403,message:"Forbidden access for this user",token:req.token})
    }
}


module.exports = notifikasiController;