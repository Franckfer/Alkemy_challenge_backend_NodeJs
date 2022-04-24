var express = require('express');
var router = express.Router();

/* GET home page disney. */
router.get('/', function(req, res, next) {
  res.json('WELCOME TO DISNEY API REST');
});

module.exports = router;
