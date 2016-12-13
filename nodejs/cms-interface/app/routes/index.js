var express = require('express');
var HomeController = require('../controllers/home_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);

module.exports = router;
