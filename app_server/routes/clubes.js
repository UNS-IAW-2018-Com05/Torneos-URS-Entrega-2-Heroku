var express = require('express');
var router = express.Router();

const ctrlClubes = require('../controllers/clubes');
/* GET home page. */
router.get('/', ctrlClubes.clubes);
module.exports = router;
