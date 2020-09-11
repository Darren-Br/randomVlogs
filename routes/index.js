var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Random Vlogsanator' });
});

router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'Random Vlogsanator' });
});

module.exports = router;
