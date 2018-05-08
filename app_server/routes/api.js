var express = require('express');
var router = express.Router();

const API = require('../controllers/API');
const middleware =  require('../auth/middleware');

/* GET home page. */
router.get('/fecha', API.getFecha);

router.post('/partidoNuevo', middleware, API.savePartido);

router.get('/guardarEstilo',middleware, API.guardarEstilo);

module.exports = router;
