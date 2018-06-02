var wisatawanController = {}
var authController = require("./authControllers")
var secret = require('./settings/jwt').secret
var shortcutFunction = require('./programs/shortcutFunction')
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var token;
/* test postman
{
        "confirm_password": "dontbenoise13",
        "password": "dontbenoise13",
        "email": "amostiberio@gmail.com",
        "nama": "Amos Tiberio Sungguraja",
        "alamat": "jl swadaya ix rt 09/01 no 17 jaticempaka pondokgede bekasi 17411",
        "no_hp": "081289063136",
        "role": "user",
        "photo": ""
}

data user login :amostiberio@gmail.com dontbenoise13
emielkautsar@gmail.com kautsaremiel

*/
wisatawanController.getCurrentUserId = () => {
    return authController.getAuthId
}

wisatawanController.auth = (req, res, next) => {
    var token = req.body.token || req.headers['token'];
    var appData = {};
    if (token) {
        jwt.verify(token, secret, function(err) {
            if (err) {
                appData["error"] = 1;
                appData["data"] = "Token is invalid";
                res.status(500).json(appData);
            } else {
                next();
            }
        });
    } else {
        appData["error"] = 1;
        appData["data"] = "Please send a token";
        res.status(403).json(appData);
    }
}

// Register User //route = api/user/register
wisatawanController.registerUser = (req, res) => {
    var today = new Date();
    var email = req.body.email,
        nama = req.body.nama,
        alamat = req.body.alamat,
        no_hp = req.body.no_hp,
        password = req.body.password,
        confirm_password = req.body.confirm_password,
        role = 'user' //otomatis memiliki role user.
    var queryCreateUser = 'INSERT INTO user SET email = ?, nama = ?, alamat = ?, no_hp = ? , password = ?, role = ?';
    var queryCheckEmail = 'SELECT * FROM user WHERE email = ?'
    req.getConnection(function(err,connection){
        connection.query(queryCheckEmail,[email],function(err,rows){
           if(err)
               console.log("Error Selecting : %s ", err);
           if(!rows.length){
              if(!req.body.email||!req.body.nama||!req.body.alamat||!req.body.no_hp||!req.body.password||!req.body.confirm_password) {
                  res.status(400).json({status: false, message: 'Data Incomplete'});
              }else if(req.body.password.length < 8){
                  res.status(400).json({status: false, message: 'Password Must be at least 8 Character'});
              } else if (req.body.password != req.body.confirm_password) {
                  return res.status(400).json({status: false, message: "Password Didnt Match"})
              } else {
                req.getConnection(function(err,connection){
                    //hashing password
                    generated_hash = require('crypto')
                    .createHash('md5')
                    .update(req.body.password+'setapakbogor', 'utf8')
                    .digest('hex');
                    password = generated_hash;

                    connection.query(queryCreateUser,[email,nama,alamat,no_hp,password,role],function(err,results){
                    if(err)
                        console.log("Error Selecting : %s ", err);
                    else { //menandakan kalau username tidak ada yang sama
                          if(err)
                            console.log("Error Selecting : %s ", err);
                          else{
                            res.status(200).json({ status: true ,message: 'Success Register User' });                  
                          } 
                    }          
                  });  
                });
              }
           } else {
              res.status(400).json({status: false, message: 'User Already Existed. Please Login'});
           }
        });
    });
}

// Login User //route = api/user/login
wisatawanController.loginUser = (req, res) => {
    var appData = {};
    var email = req.body.email;
    var password = req.body.password;
    req.getConnection(function(err, connection) {
        if (err) {           
            res.status(500).json({status: false, message: "Internal Server Error"})
        } else {
            var queryLoginUser = 'SELECT * FROM user WHERE email = ?'
            connection.query(queryLoginUser, [email], function(err, rows) {                 
                if (err) {
                    res.status(500).json({status: false, message: "Internal Server Error"})
                } else {
                   //hashing password
                    generated_hash = require('crypto')
                    .createHash('md5')
                    .update(req.body.password+'setapakbogor', 'utf8')
                    .digest('hex');
                    password = generated_hash;

                    if (rows.length > 0) {
                        if (rows[0].password == password) {
                            let token = jwt.sign(rows[0], secret, {
                                    expiresIn: 10 * 60 * 60 //3 jam
                                });
                            appData.error = 0;
                            appData["token"] = token;
                            res.status(200).json({status: true, message: 'Login Sukses',appData});                              
                        } else {                            
                            res.status(400).json({status: false, message: 'Email and Password does not match'});
                        }
                    } else {                        
                        res.status(400).json({status: false, message: 'Email does not exists!'});
                    }
                }
            });
            // connection.release();
        }
    });
}

// Get Current User Profile data /route = api/user/profile
wisatawanController.getUserProfile = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    }else{
      var token = req.headers.authorization     
      var payload = shortcutFunction.authToken(token)        
      var user_id = payload.user_id         
      var query = 'SELECT * FROM user WHERE user_id = ?'
          req.getConnection(function (err, conn) {
            conn.query(query, user_id, function (err, rows) {
              res.json(rows)
              })
          })
        } 
}

// Update informasi Profile /route = api/user/editprofile
wisatawanController.updateProfileUserById = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {
        var token = req.headers.authorization     
        var payload = shortcutFunction.authToken(token)        
        var user_id = payload.user_id    
       
        if(!req.body.email||!req.body.nama||!req.body.alamat||!req.body.no_hp) {
            res.status(400).json({status: false, message: 'Data Incomplete'});
        } else {
          var email = req.body.email,
              nama = req.body.nama,
              alamat = req.body.alamat,
              no_hp = req.body.no_hp
          var queryUpdateUserById = 'UPDATE user SET nama = ? , alamat = ? ,email = ?, no_hp = ? WHERE user_id = ?';
          req.getConnection(function(err,connection){
            connection.query(queryUpdateUserById,[nama,alamat,email,no_hp,user_id],function(err,results){
                if(err)
                  console.log("Error Selecting : %s ", err);
                else if(results.length){
                  res.status(404).json({ message: 'User ID not Found' });
                }
                else{
                  res.status(200).json({status: true , message: 'Success Update User' });   
                }
            });
        });
        }
    }    
}

// Update Password informasi Profile /route = api/user/changepassword
wisatawanController.changePasswordUserById = (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {
        var token = req.headers.authorization     
        var payload = shortcutFunction.authToken(token)        
        var user_id = payload.user_id  
        var queryCheckPassword = 'SELECT * FROM user WHERE user_id = ?'             
        req.getConnection(function(err,connection){
          connection.query(queryCheckPassword,[user_id],function(err,rows){              
            var checkOldPassword = rows[0].password;
            var oldPasswordInput = require('crypto')
            .createHash('md5')
            .update(req.body.old_password +'setapakbogor', 'utf8')
            .digest('hex');
            
            if(!req.body.old_password||!req.body.new_password||!req.body.confirm_password) {
              res.status(400).json({status: false, message: 'Data Incomplete'});
            } else if(checkOldPassword != oldPasswordInput){
              res.status(400).json({status: false, message: 'Input Old Password Incorrect'});
            } else if(req.body.new_password.length < 8){
              res.status(400).json({status: false, message: 'Password Must be at least 8 Character'});
            } else if (req.body.new_password != req.body.confirm_password) {
              res.status(400).json({status: false, message: "New Password Didn't Match"})
            } else {
              var old_password = req.body.old_password,
                  new_password = req.body.new_password,
                  confirm_password = req.body.confirm_password

              var newPasswordHash = require('crypto')
              .createHash('md5')
              .update(req.body.new_password +'setapakbogor', 'utf8')
              .digest('hex');
                            
              var queryChangePasswordUserById = 'UPDATE user SET password = ? WHERE user_id = ?';
              req.getConnection(function(err,connection){
                connection.query(queryChangePasswordUserById,[newPasswordHash,user_id],function(err,results){
                    if(err)
                      console.log("Error Selecting : %s ", err);
                    else if(results.length){
                      res.status(404).json({ message: 'User ID not Found' });
                    }
                    else{
                      res.status(200).json({status: true , message: 'Success Change password User' });   
                    }
                });
              });
            }
          });
        });    
    }    
}


//api/user/uploadphoto
wisatawanController.uploadPhoto = async (req, res) => {        
    if(!req.headers.authorization) {
        res.status(401).json({status: false, message: 'Please Login !'});
    } else {
      var token = req.headers.authorization     
      var payload = shortcutFunction.authToken(token)        
      var user_id = payload.user_id  
      var newNameUpload;
      var direktori = './public/uploads/userphoto/';

      //Destination storage
      var storage = multer.diskStorage({      
        destination: direktori,
        filename: function (req, file, callback) {
          newNameUpload = file.fieldname + '-' + user_id + ".png"
          callback(null, newNameUpload);
        }
      });

      // multer buat fungsi upload
      var upload = multer({ 
          storage : storage,
          fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname).toLowerCase();
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                return callback(new Error('Only images are allowed'))
            }
            callback(null, true)
          },
          limits: {          
            fileSize: 5 * 1024 * 1024 // mendefinisikan file size yang bisa diupload 5 MB
          } 
      }).single('userPhoto');

      //upload function
      upload(req, res, function(err) {
        // console.log(err, 'Im in post , inside upload'+path);
        if(err) {
          if (err.code == 'LIMIT_FILE_SIZE') {
            res.status(400).json({status: false, message: 'File berukuran melebihi yang diizinkan.', err: err});
          } else {
            res.status(500).json({status: false, message: 'File gagal diunggah.', err: err});
          }
        } else if (req.file == null || req.file == 0) {
          res.status(400).json({status: false, message: 'File kosong, silahkan pilih file kembali'});
        } else {
          var direktoriPhoto = direktori + newNameUpload
          var queryUpdateUserPhoto = 'UPDATE user SET photo = ? WHERE user_id = ?';
          req.getConnection(function(err,connection){
            connection.query(queryUpdateUserPhoto,[direktoriPhoto,user_id],function(err,results){
                if(err)
                  console.log("Error Selecting : %s ", err);
                else if(results.length){
                  res.status(404).json({ message: 'User ID not Found' });
                }
                else{
                  res.status(200).json({status: true , message: 'Success Update Photo User' });   
                }
            });
          });
        }
      });
    }
}

/* Admin tapi ga dibutuhin */
//Delete user
/*wisatawanController.deleteUserById = (req, res) => {
    var user_id = req.params.id;
    var queryDeleteUserById = 'DELETE FROM user WHERE user_id = ?';
    if(req.body.role != 'Admin') {
        res.status(403).json({status:403,message:"Forbidden Access"});
    } else {
      req.getConnection(function(err,connection){
        connection.query(queryDeleteUserById,[user_id],function(err,results){
            if(err)
              console.log("Error Selecting : %s ", err);
            else if(results.length){
              res.status(404).json({ message: 'User ID not Found' });
            }
            else{
              res.status(200).json({status: true , message: 'Success Delete User' });   
            }
        });
    });
    }    
}

// Create User *ga dibutuhin karena bukan admin*
wisatawanController.createUser = (req, res) => {
    var username = req.body.username,
        email = req.body.email;
        password= req.body.password,
        confirm_password= req.body.confirm_password
    var queryCreateUser = 'INSERT INTO user SET password = ? ,email = ?';
    var queryCheckUsername = 'SELECT * FROM user WHERE username = ?'
    if(!req.body.username || !req.body.email || !req.body.password || !req.body.confirm_password) {
        res.status(400).json({status: false, message: 'Data Incomplete'});
    } else if(req.body.password.length < 8){
        res.status(400).json({status: false, message: 'Password Must be at least 8 Character'});
    } else if (req.body.password != req.body.confirm_password) {
        return res.status(400).json({status: false, message: "Password Didnt Match"})
    } else {
      req.getConnection(function(err,connection){
          connection.query(queryCreateUser,[username,password,email],function(err,results){
          if(err)
              console.log("Error Selecting : %s ", err);
          else { //menandakan kalau username tidak ada yang sama
                if(err)
                  console.log("Error Selecting : %s ", err);
                else{
                  res.status(200).json({ status: true , message: 'Success Create User' });   
                }
          }          
        });  
    });
    }
}

// Get semua User *ga dibutuhin karena bukan admin*
wisatawanController.getUsers = (req, res) => {
    req.getConnection(function(err,connection){
        connection.query('SELECT * FROM user',function(err,rows){
           if(err)
              console.log("Error Selecting : %s ", err);
           else {
               var objs = []
               for (var i = 0; i < rows.length; i++) {
                   objs.push({
                       username: rows[i].username,
                       email: rows[i].email,
                       // phone: rows[i].phone_number
                   }) 
               }
               res.json(objs)
           } 
        });
    });
}*/
    


module.exports = wisatawanController;