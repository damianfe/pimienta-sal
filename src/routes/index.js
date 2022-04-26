var express = require('express');
var router = express.Router();

const {index, detail} = require('../controllers/mainController')

/* / */
router.get('/', index);

module.exports = router;
