var express = require('express')
var app = express()
var mysql = require('mysql')
var api = require('./routes/api')

var index = require('./routes/index')
var cors = require('cors')
var passport = require('passport')
var jwt = require('jsonwebtoken')
var multer = require('multer');
var path = require('path');

app.set('view engine', 'ejs')
var myConnection  = require('express-myconnection')
var config = require('./config')
var dbOptions = {
    host:      config.database.host,
    user:       config.database.user,
    password: config.database.password,
    port:       config.database.port, 
    database: config.database.db
}
app.use(myConnection(mysql, dbOptions))

var connection = mysql.createConnection({dbOptions}) 
var expressValidator = require('express-validator')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
// var hookJWTStrategy = require('./app/services/passportStrategy');

// app.use(expressValidator())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 
app.use(cors())
// app.use(methodOverride(function (req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     // look in urlencoded POST bodies and delete it
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }))
 
// Hook up Passport.
// app.use(passport.initialize());

// Hook the passport JWT strategy.
// hookJWTStrategy(passport);

var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');
 
// app.use(cookieParser('keyboard cat'))
// app.use(session({ 
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }))

// Default Api Awal
app.use('/api', api())
app.use('/public',express.static(path.join(__dirname, 'public')));

// app.use('/', index)

app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000')
})
