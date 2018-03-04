var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  // we don't need next (callback) in this challange
  res.render('index', { title: 'Express', name: 'Oleg' });
});

module.exports = router;
