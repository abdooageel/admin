var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/adminRegUsers', function(req, res) {
  res.render('adminRegUsers', { title: 'Admin Register Users',NProgress:"fadeIn out"});
});
router.get('/adminShowUsers', function(req, res) {
  res.render('adminShowUsers', { title: 'Admin Show Users',users:users,NProgress:"fadeIn out" });
});
module.exports = router;
