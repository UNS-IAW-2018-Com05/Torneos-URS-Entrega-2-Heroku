var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/equipofavorito');

const authenticated = function (req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

/* GET home page. */
router.get('/',authenticated , ctrlMain.equipofavorito);
module.exports = router;
