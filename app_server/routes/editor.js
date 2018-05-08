var express = require('express');
var router = express.Router();

const ctrlEditor = require('../controllers/editor');
const middleware = require('../auth/middleware');

/* GET home page. */
router.get('/',middleware, ctrlEditor.edicion);
module.exports = router;
