var emailController = {}
var nodemailer          =   require('nodemailer');
var transporter         =   nodemailer.createTransport('smtps://portalharga.ipb@gmail.com:portalharga1234@smtp.gmail.com');
var jwt = require('jsonwebtoken');

//send link to mail for forget password
emailController.forgetPassword = function(req,res){

    var email = req.body.email
    queryUser = 'SELECT * FROM user where email = ?'
    req.getConnection( (err,connection) =>{
        connection.query(queryUser,email,(err,rows) => {
            if(err) console.log("Error Selecting : %s ", err);
            if(!rows.length){
                res.status(404).json({ message: 'User Email not Registered' });
            }else{
                //email user
        var email   = user.email;
        
        //create token as params
        var token = jwt.sign({            
            username:user.username,            
        },config.secretKey,{
            expiresIn:60*60
        });
        
        //define url
        var url = 'https://ph.yippytech.com/mobile/reset-password.html?' + token;

        console.log(url);

        //contenct emailnya, mulai dari, tujuan, subjek, html
        var mailOptions = {
            from: '"PORTAL-HARGA" <portalharga.ipb@gmail.com>',
            to: email,
            subject: 'Forget Password',
            html:

            '<div style="width: 100%;height: 10px;background-color: #3c763d;margin: 0px" ></div>'+
            '<div style="height: 50px;background-color: lightgrey;padding: 5px" >'+
                '<p style="padding-left: 10px">' +
                '<b>Lupa Kata Sandi</b>' +
                '</p>' +
            '</div>' +

            '<div style="width: 100%;background-color: width" >' +
                '<img src="https://ph.yippytech.com/mobile/logo.jpg" width="100%" />' +
                '<p>Seseorang telah melakukan permintaan pengubahan kata sandi untuk akun :</p>' +
                '<b>'+ user.username +'</b>' +
                '<p>Untuk reset kata sandi silahkan klik tombol dibawah:</p>' +
                '<a href='+ url +'> <button style="background-color: #3c763d;border: none;color: white;padding: 10px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;" type="button">Reset Kata Sandi</button> </a>'+
                '<p>Apabila anda tidak melakukan permintaan pengubahan kata sandi abaikan email ini, dan kata sandi anda tidak akan diubah.</p>' +
            '</div>' +
            '<div style="width: 100%;background-color: lightgrey;padding: 5px" >' +
                '<p>' +
                '<b>Masalah dengan link ?</b> Copy dan paste URL dibawah ini ke browser:'+
                '<a href='+ url +'>LINK</a>'+
                '</p>' +
            '</div>' +
            '<div style="width: 100%;height: 2px;background-color: #3c763d" ></div>'
           
            // 'Saudara/i '+ user.name + '<br><br>'+
            // 'reNew Password at link : '+ '<a href='+ url +'>klick</a>' + '<br> <br>' +
            // 'Portal Harga SEIS ILKOM IPB'
        };          
            //function sender
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }else{
                    console.log('Message sent: ' + info.response);
                    res.json({
                        status:200,
                        message:"succes",
                        data:email,
                        token:""
                    });
                }
            });
            }
        });
    });
	
};

module.exports = emailController