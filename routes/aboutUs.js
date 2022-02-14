var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('aboutUs');
});

module.exports = router;