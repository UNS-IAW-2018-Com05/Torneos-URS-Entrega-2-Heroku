var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/noticias');
/* GET home page. */
router.get('/', ctrlMain.noticias);
module.exports = router;
