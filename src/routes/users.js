var express = require('express');
var router = express.Router();

const {login, logout} = require('../controllers/usersController');

/* /users */
router.get('/login', login);
router.get('/logout',logout);

module.exports = router;
