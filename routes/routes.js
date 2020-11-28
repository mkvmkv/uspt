const expressRoutes = require('express').Router();
const tribute = require('../controller/userController');
expressRoutes.get('/v1/users',tribute.userData);
expressRoutes.post('/v1/users/login',tribute.userLogin1);

module.exports = expressRoutes;