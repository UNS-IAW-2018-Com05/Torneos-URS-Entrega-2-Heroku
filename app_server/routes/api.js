var express = require('express');
var router = express.Router();

const API = require('../controllers/API');
const middleware =  require('../auth/middleware');

const authenticated = function (req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

/* GET home page. */
router.get('/fecha', API.getFecha);

router.post('/partidoNuevo', middleware, API.savePartido);

router.get('/guardarEstilo', API.guardarEstilo);

router.get('/guardarFavorito', authenticated, API.guardarFavorito);

module.exports = router;
