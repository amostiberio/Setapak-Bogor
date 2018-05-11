var wisatawanController = {}
var authController = require("./authControllers")

wisatawanController.getCurrentUserId = () => {
    return authController.getAuthId
}

// Create User
wisatawanController.createUser = (req, res) => {
    var username = req.body.username,
        email = req.body.email;
        password= req.body.password,
        confirm_password= req.body.confirm_password
    var queryCreateUser = 'INSERT INTO user SET username = ? , password = ? ,email = ?';
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
                  res.status(200).json({ message: 'Success Create User' });   
                }
          }          
        });  
    });
    }
}

// Get semua User
wisatawanController.getUser = (req, res) => {
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
}

// Get user dengan ID
wisatawanController.getUserById = (req, res) => {
    var user_id = req.params.id
    var query = 'SELECT * FROM user WHERE user_id = ?'
    req.getConnection(function (err, conn) {
        conn.query(query, user_id, function (err, rows) {
            res.json(rows)
        })
    })
}

// Update informasi User
wisatawanController.updateUserById = (req, res) => {
    var user_id = req.params.id;
    var username = req.body.username,
        email = req.body.email;
        password= req.body.password,
        confirm_password= req.body.confirm_password
    var queryEditUserById = 'UPDATE user SET username = ? , password = ? ,email = ? WHERE user_id = ?';
    if(!req.body.username || !req.body.email || !req.params.id || !req.body.password || !req.body.confirm_password) {
        res.status(400).json({status: false, message: 'Data Incomplete'});
    } else if(req.body.password.length < 8){
        res.status(400).json({status: false, message: 'Password Must be at least 8 Character'});
    } else if (req.body.password != req.body.confirm_password) {
        return res.status(400).json({status: false, message: "Password Didnt Match"})
    } else {
      req.getConnection(function(err,connection){
        connection.query(queryEditUserById,[username,password,email,user_id],function(err,results){
            if(err)
              console.log("Error Selecting : %s ", err);
            else if(results.length){
              res.status(404).json({ message: 'User ID not Found' });
            }
            else{
              res.status(200).json({ message: 'Success Edit User' });   
            }
        });
    });
    }
    
}
//Delete user
wisatawanController.deleteUserById = (req, res) => {
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
              res.status(200).json({ message: 'Success Delete User' });   
            }
        });
    });
    }    
}


    


module.exports = wisatawanController;