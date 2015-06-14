var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user_app').userMgr;
var CityMgr = require('../app/city').CityMgr;

/* GET home page. */ 
console.log("aaaaa");
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('homeUser', { title: 'homeUser' });
});

router.get('/department', function(req, res) {
  res.render('department', { title: ' department' });
});

router.get('/myAcount', function(req, res) {
  i18n.setlang(req,res);
  res.render('myAcount', { title: 'myAcount' });
});
router.get('/editProfile', function(req, res) {
  i18n.setlang(req,res);
  res.render('editProfile', { title: 'editProfile' });
});

router.get('/forgotPassword', function(req, res) {
  i18n.setlang(req,res);
  res.render('forgotPassword', { title: 'myAcount' });
});


router.get('/login', function(req, res) {
  i18n.setlang(req,res);
  res.render('login', { title: 'login' });
});

router.get('/account', function(req, res) {
  res.render('account', { title: ' My Account' });
});

router.get('/myOrder', function(req, res) {
  res.render('myOrder', { title: 'myOrder' });
});



router.get('/abdo', function(req,res){
  userMgr.deleteById(1,function(result){
     res.render('abdo',{title: 'abdo'});
     });
  });

router.get('/homePage', function(req, res) {
  i18n.setlang(req,res);
  res.render('homePage', { title: 'Seller' });
});

router.get('/products', function(req, res) {
  i18n.setlang(req,res);
  res.render('products', { title: 'Seller' });
});

router.get('/location', function(req, res) {
  res.render('location', { title: ' location' });
}); 



router.get('/special_offer', function(req, res) {
  i18n.setlang(req,res);
  res.render('special_offer', { title: 'Seller' });
});

router.get('/registration', function(req, res) {
  i18n.setlang(req,res);
  res.render('registration', { title: 'Registration' });
});

router.get('/product_summary', function(req, res) {
  i18n.setlang(req,res);
  res.render('product_summary', { title: 'Seller' });
});

router.get('/product_details', function(req, res) {
  i18n.setlang(req,res);
  res.render('product_details', { title: 'Seller' });
});
router.get('/addCity', function(req, res) {
  i18n.setlang(req,res);
  res.render('addCity', { title: 'addCity' });
});
router.get('/addMahalla', function(req, res) {
  i18n.setlang(req,res);
  res.render('addMahalla', { title: 'addMahalla' });
});
router.get('/addArea', function(req, res) {
  i18n.setlang(req,res);
  res.render('addArea', { title: 'addArea' });
});
router.get('/addSchool', function(req, res) {
  i18n.setlang(req,res);
  res.render('addSchool', { title: 'addSchool' });
});

// set a cookie to requested locale
router.get('/:locale', function (req, res) {
  res.redirect("/user");
});

module.exports = router;



