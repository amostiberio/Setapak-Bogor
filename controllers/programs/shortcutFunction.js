var jwt = require('jsonwebtoken');

var shortcutFunction = {}

shortcutFunction.decodeToken = (token) => {
    var decoded_token = jwt.decode(token)
    return decoded_token
}
// let decoded = jwt.decode(req.headers.authorization.split(' ')[1]);
// let penulis = decoded._id;

module.exports = shortcutFunction