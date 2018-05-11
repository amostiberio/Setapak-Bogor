var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

var wisatawanControllers = require('../controllers/wisatawanControllers');

var APIRoutes = function () {
    router.get('/users', wisatawanControllers.getUser);
    router.get('/users/:id', wisatawanControllers.getUserById);
    router.post('/users/create',wisatawanControllers.createUser);
    router.post('/users/edit/:id',wisatawanControllers.updateUserById);

    return router;
};

module.exports = APIRoutes;