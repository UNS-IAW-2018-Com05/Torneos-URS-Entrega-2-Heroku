var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/fixture');
/* GET home page. */
router.get('/', ctrlMain.fixture);
module.exports = router;
