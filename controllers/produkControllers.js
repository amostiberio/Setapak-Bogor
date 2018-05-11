var produkController = {}
var authController = require("./authControllers")

/*
Di Postman
{	
	"role" : "Pemandu",
	"harga" : "511",
	"keterangan" : " Percobaan "
}
Terkadang ada id params yang buat pemandu id
*/

// Create Produk
produkController.createProduk = (req, res) => {
	var pemandu_id = req.params.id; //sememtara , nanti ambil dari current id
    var harga = req.body.harga,
        keterangan = req.body.keterangan,
        date_post= new Date();
        //buat nanti picture ada di backendPH
        //var ImageSaver 	= require('image-saver-nodejs/lib');
		//var imageSaver 	= new ImageSaver();

    var queryCreateProduk = 'INSERT INTO produk SET pemandu_id = ?, harga = ? , keterangan = ? , date_post = ?';
    if(req.body.role != 'Pemandu') {
         res.status(403).json({status:403,message:"Forbidden Access"});
    } else if(!req.body.harga || !req.body.keterangan) {
        res.status(400).json({status: false, message: 'Data Incomplete'});
    } else if(req.body.harga == 0 ){
        res.status(400).json({status: false, message: 'Harga tidak boleh gratis'});
    } else {
      req.getConnection(function(err,connection){
          connection.query(queryCreateProduk,[pemandu_id,harga,keterangan,date_post],function(err,results){
          if(err)
              console.log("Error Selecting : %s ", err);
          else { //menandakan kalau username tidak ada yang sama
                if(err)
                  console.log("Error Selecting : %s ", err);
                else{
                  res.status(200).json({ message: 'Success Create Produk' });   
                }
          }          
        });  
    });
    }
}

// Get semua Produk
produkController.getProduk = (req, res) => {
    req.getConnection(function(err,connection){
        connection.query('SELECT * FROM produk',function(err,rows){
           if(err)
              console.log("Error Selecting : %s ", err);
           else {
               var objs = []
               for (var i = 0; i < rows.length; i++) {
                   objs.push({
                       pemandu_id: rows[i].pemandu_id,
                       harga: rows[i].harga,
                       keterangan: rows[i].keterangan,
                       date_post : rows[i].date_post
                   }) 
               }
               res.json(objs)
           } 
        });
    });
}

// Get Produk dengan ID
produkController.getProdukById = (req, res) => {
    var produk_id = req.params.id
    var query = 'SELECT * FROM produk WHERE produk_id = ?'
    req.getConnection(function (err, conn) {
        conn.query(query, [produk_id], function (err, rows) {
            res.json(rows);
        });
    });
}

// Update informasi Produk
produkController.updateProdukById = (req, res) => {
    var produk_id = req.params.id; 
    var harga = req.body.harga,
        keterangan = req.body.keterangan
        pemandu_id = req.body.pemandu_id //sememtara , nanti ambil dari current id
        //date_post= new Date();
        //belum samain id di database dengan id di current id pemandu

    var queryEditProdukById = 'UPDATE produk SET harga = ? , keterangan = ? WHERE produk_id = ? AND pemandu_id = ?';
    if(req.body.role != 'Pemandu') {
         res.status(403).json({status:403,message:"Forbidden Access"});
    } else if(!req.body.harga || !req.body.keterangan || !req.body.pemandu_id || !req.params.id  ) {
        res.status(400).json({status: false, message: 'Data Incomplete'});
    } else {
      req.getConnection(function(err,connection){
          connection.query(queryEditProdukById,[harga,keterangan,produk_id,pemandu_id],function(err,results){
          if(err)
              console.log("Error Selecting : %s ", err);
          else { //menandakan kalau username tidak ada yang sama
                if(err)
                  console.log("Error Selecting : %s ", err);
                else{
                  res.status(200).json({ message: 'Success Update Produk' });   
                }
          }          
        });  
    });
    }
 }
//Delete user
produkController.deleteProdukById = (req, res) => {
	//belum samain id di database dengan id di current id pemandu
    var produk_id = req.params.id,
    	role = req.body.role
    	//pemandu_id = req.body.pemandu_id //sememtara , nanti ambil dari current id
    var queryDeleteProdukById = 'DELETE FROM produk WHERE produk_id = ?';
    if(req.body.role != 'Pemandu' || req.body.role != 'Admin') {
        res.status(403).json({status:403,message:"Forbidden Access"});
    } else {
      req.getConnection(function(err,connection){
        connection.query(queryDeleteProdukById,[produk_id],function(err,results){
            if(err)
              console.log("Error Selecting : %s ", err);
            else if(results.length){
              res.status(404).json({ message: 'Produk ID not Found' });
            }
            else{
              res.status(200).json({ message: 'Success Delete Produk' });   
            }
        });
    });
    }    
}



module.exports = produkController