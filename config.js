var config = {
    database: {
        host:      '127.0.0.1',     // database host
        user:      'root',         // your database username
        password:  '',         // your database password
        port:      3306,         // default MySQL port
        db:        'setapakbogor'         // your database name
    },
    server: {
        host: '127.0.0.1',
        port: '3000'
    }
}

// config.db.details = {
//     host: 'localhost',
//     port: 2009,
//     dialect: 'mssql',
//     dialectOptions: {
//         connectionTimeout: 300000,
//         requestTimeout: 300000,
//     },
//     pool: {
//         max: 100,
//         min: 0,
//         idle: 30000,
//     }
// };

config.keys = {
    secret: 'iv3fordd&pjlt%(op-ym+a&x$i0x(o3o17qjoj@3pb=znvckww' // Not anymore...
};

 
    module.exports = config