const express = require('express');

const route = express.Router();
const userController = require('../../controller/user/user.controller');

route.get('/', userController.getallUser);
route.post('/register', userController.register);
route.post('/getUserById', userController.getUserById);
route.post('/login', userController.userLogin);

module.exports = route;
