var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/posiciones');
/* GET home page. */
router.get('/', ctrlMain.posiciones);
module.exports = router;
