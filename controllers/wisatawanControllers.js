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
        nohp = req.body.nohp,
        password = req.body.password,
        confirmpassword = req.body.confirmpassword,
        role = 'user' //otomatis memiliki role user.
    var queryCreateUser = 'INSERT INTO user SET email = ?, nama = ?, alamat = ?, no_hp = ? , password = ?, role = ?';
    var queryCheckEmail = 'SELECT * FROM user WHERE email = ?'
    req.getConnection(function(err,connection){
        connection.query(queryCheckEmail,[email],function(err,rows){
           if(err)
               console.log("Error Selecting : %s ", err);
           if(!rows.length){           
            if(req.body.email=="" || req.body.nama=="" || req.body.alamat=="" || req.body.nohp=="" || req.body.password=="" || req.body.confirmpassword==""){
                res.json({status:204, success: false, message: 'Password Must be at least 8 Character'});
            }else if(req.body.password.length < 8){
                  res.json({ status:200, success: false, message: 'Password Must be at least 8 Character'});
              } else if (req.body.password != req.body.confirmpassword) {
                  return res.json({status:200, success: false, message: "Password Didn't Match"})
              } else {
                req.getConnection(function(err,connection){
                    //hashing password
                    generated_hash = require('crypto').createHash('md5').update(req.body.password+'setapakbogor', 'utf8').digest('hex');
                    password = generated_hash;
                    connection.query(queryCreateUser,[email,nama,alamat,nohp,password,role],function(err,results){
                    if(err)
                        res.json({status: 408,success: false, message: 'Gagal Daftar User'});                      
                    else { 
                          if(err)
                            console.log("Error Selecting : %s ", err);
                          else{
                            res.json({ status:200, success: true ,message: 'Sukses Mendaftarkan User. Silahkan Login' });                  
                          } 
                    }          
                  });  
                });
              }
           } else {
              res.json({status:200,success: false, message: 'Email Sudah Terdaftar. Silahkan Login'});
           }
        });
    });
}

// Login User //route = api/user/login
wisatawanController.loginUser = (req, res) => {    
    var email = req.body.email;
    var password = req.body.password;
    req.getConnection(function(err, connection) {
        if (err) {           
            res.json({status: 500, success: false, message: "Internal Server Error"})
        } else {
            var queryLoginUser = 'SELECT * FROM user WHERE email = ?'
            connection.query(queryLoginUser, [email], function(err, rows) {                 
                if (err) {
                    res.json({status: 500,success: false, message: "Internal Server Error"})
                } else {
                   //hashing password
                    generated_hash = require('crypto').createHash('md5').update(req.body.password+'setapakbogor', 'utf8').digest('hex');
                    password = generated_hash;
                    if (rows.length > 0) {
                        if (rows[0].password == password) {
                            let token = jwt.sign(rows[0], secret, {
                                    //expiresIn: 10 * 60 * 60 //3 jam sementara no expires
                                });
                            res.json({status: 200, success: true, message: 'Login Sukses', data: rows[0],token: token});                              
                        } else {                            
                            res.json({status: 400 ,success: false, message: 'Email and Password does not match'});
                        }
                    } else {                        
                        res.json({status: 400 , success: false, message: 'Email does not exists!'});
                    }
                }
            });
        }
    });
}

// //router = api/user/profile/:user_id
wisatawanController.getUserData = (req, res) => {  
    var user_id = req.params.user_id
    var querySelectUser  = 'SELECT * FROM user WHERE user_id = ? '       
      req.getConnection(function(err,connection){
        connection.query(querySelectUser,[user_id],function(err,rows){ //get pemandu id
              if(err)
                 console.log("Error Selecting : %s ", err);
              if(rows.length){                
                    res.json({status: 200, message: 'Data User', data: rows[0]});
              }
        });
      });
}

// Update informasi Profile /route = api/user/updateprofile
wisatawanController.updateProfileUserById = (req, res) => {        
           if(!req.body.token) {
                  res.status(401).json({status: false, message: 'Please Login !'});
              }else{
                  var token = req.body.token    
                //JWT VERIFY     
                    jwt.verify(token, secret, function(err, decoded) {
                      if(err) {
                        return res.status(401).send({message: 'invalid_token'});
                      }else{
                      var user_id = decoded.user_id
                       if(!req.body.email||!req.body.nama||!req.body.alamat||!req.body.no_hp||!req.body.user_id) {
                            res.status(400).json({status: false, message: 'Data Incomplete'});
                        } else {
                          var email = req.body.email,
                              nama = req.body.nama,
                              alamat = req.body.alamat,
                              no_hp = req.body.no_hp,                    
                              token = req.body.token
                          var queryUpdateUserById = 'UPDATE user SET nama = ? , alamat = ? ,email = ?, no_hp = ? WHERE user_id = ?';
                          req.getConnection(function(err,connection){
                            connection.query(queryUpdateUserById,[nama,alamat,email,no_hp,user_id],function(err,results){
                                if(err)
                                  console.log("Error Selecting : %s ", err);
                                else if(results.length){
                                  res.status(404).json({ message: 'User ID not Found' });
                                }
                                else{
                                  var queryUser = 'SELECT * FROM user WHERE user_id = ?'
                                  req.getConnection(function(err,connection){
                                    connection.query(queryUser,[user_id],function(err,rows){
                                         if (err) {
                                             res.json({status: 400,success: false, message: "Internal Server Error"})
                                         } else {
                                             res.json({status: 200 , success: true, message: 'Success Update User',data: rows[0],token: token });  
                                         }
                                   });
                                  });  
                                }
                            });
                        });
                        }
                      }
                    }); 
              }          
}

// Update Password informasi Profile /route = api/user/changepassword
wisatawanController.changePasswordUserById = (req, res) => {
              if(!req.body.token) {
                  res.status(401).json({status: false, message: 'Please Login !'});
              }else{
                  var token = req.body.token    
                //JWT VERIFY     
                    jwt.verify(token, secret, function(err, decoded) {
                      if(err) {
                        return res.status(401).send({message: 'invalid_token'});
                      }else{
                        var user_id = decoded.user_id
                         var queryCheckPassword = 'SELECT * FROM user WHERE user_id = ?'             
                          req.getConnection(function(err,connection){
                            connection.query(queryCheckPassword,[user_id],function(err,rows){              
                              var checkOldPassword = rows[0].password;
                              var oldPasswordInput = require('crypto').createHash('md5').update(req.body.old_password +'setapakbogor', 'utf8').digest('hex');
                            
                              if(!req.body.old_password||!req.body.new_password||!req.body.confirm_password) {
                                res.json({status: 400, message: 'Data Incomplete'});
                              } else if(checkOldPassword != oldPasswordInput){
                                res.json({status: 400, message: 'Input Old Password Incorrect'});
                              } else if(req.body.new_password.length < 8){
                                res.json({status: 400, message: 'Password Must be at least 8 Character'});
                              } else if (req.body.new_password != req.body.confirm_password) {
                                res.json({status: 400, message: "New Password Didn't Match"})
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
                                        res.json({ status:404, message: 'User ID not Found' });
                                      }
                                      else{
                                        var queryUser = 'SELECT * FROM user WHERE user_id = ?'
                                        req.getConnection(function(err,connection){
                                          connection.query(queryUser,[user_id],function(err,rows){
                                               if (err) {
                                                   res.json({status: 400,success: false, message: "Internal Server Error"})
                                               } else {
                                                  res.json({status: 200 , message: 'Success Change password User',data: rows[0],token: token  });   
                                               }
                                         });
                                        });  
                                        
                                      }
                                  });
                                });
                              }
                          });
                        });   
                      }
                    }); 
              }                              
}         

// Get profile data Pemandu y//router = api/user/profilepemandu/:pemandu_id
wisatawanController.getDataPemandu= (req, res) => {          
  var pemandu_id = req.params.pemandu_id
  var querySelectDataPemandu = 'SELECT * FROM pemandu WHERE pemandu_id = ?'
  var querySelectDataUser= 'SELECT * FROM user WHERE user_id = ?'         
  req.getConnection(function(err,connection){
    connection.query(querySelectDataPemandu,[pemandu_id],function(err,rows){ //get pemandu id
      if(err)
         console.log("Error Selecting : %s ", err);
      if(rows.length){
        res.json({status: 200, message: 'Sukses', data: rows});
        // var user_id = rows[0].user_id               
        // req.getConnection(function(err,connection){
        //   connection.query(querySelectDataUser,[user_id],function(err,rows){ //get pemandu id
        //     if(err)
        //        console.log("Error Selecting : %s ", err);
        //     if(rows.length){                
        //       res.json({status: 200, message: 'Sukses', data: rows});
        //     }
        //   });
        // }); 
      }else {                        
              res.json({status: 400, message: 'Pemandu does not exists!'});
      }
    });
  });   
}

module.exports = wisatawanController;