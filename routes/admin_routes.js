var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson').users;
var validator = require('../app/validator_api');
var rand= require('../app/serialnumber').rand;
var user =require('../app/userHelpers');
var CompanyMgr=require('../app/company').CompanyMgr;
var SizeMgr=require('../app/size').SizeMgr;
var TobMgr=require('../app/tob').TobMgr;
var userHelpers = require('../app/userHelpers');
var AdminMgr=require('../app/admin').AdminMgr;
var login = require('../app/admin_login')(router);
var MeasureMgr = require('../app/measure').MeasureMgr;
var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra');
router.get('/',userHelpers.isAdminLogin, function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Login' });
});
router.get('/testPhoto', userHelpers.isAdmin,function(req, res) {
  res.render('testPhoto', { title: 'Admin Page',NProgress:"fadeIn out" });
});
router.get('/adminPage',userHelpers.isAdmin, function(req, res) {
  res.render('adminPage', { title: 'Admin Page',NProgress:"fadeIn out" });
});
router.get('/adminTest',userHelpers.isAdmin, function(req, res) {
  res.render('adminTest', { title: 'Admin Test' });
});

// router.get('/new',function(req,res){
//   obj={
//     name : 'test',
//     name_en : 'body.name_en',
//     company_idcompany : 1000000,
//     tog_idtog : 1000000,
//     genre_idgenre : 1000000,
//     tob_idtob : 1000000,
//     item_desc : 'body.item_desc',
//     brand_idbrand : 1000000,
//     admin_idadmin : 1000000,
//     price :30.5,
//     discount : 10,
//     discount_exp : 'body.discount_exp',
//     color_idcolor : 1000000,
//     quantity : 10,
//     unix_date : 123456789,
//     stock_idstock : 1000000,
//     size_idsize : [1,2,3],
//     measure_idmeasure : 10000000,
//     quantityc : [10,11,12]
//   }
//   userHelpers.addItem(obj,function(result){
//     console.log(result);
//   });
// });
router.get('/adminShowOrder',userHelpers.isAdmin, function(req, res) {
  res.render('adminShowOrder', { title: 'Admin Show Order',NProgress:"fadeIn out"});
});

router.get('/deleteAdmin/:id',userHelpers.isAdmin, function(req, res) {
  AdminMgr.DeleteAdmin(req.params.id,function(err,result){
    res.send(true);
  });
});

router.get('/adminInvoice',userHelpers.isAdmin, function(req, res) {
  res.render('adminInvoice', { title: 'Invoice'});
});
router.get('/adminSerialNumber',userHelpers.isAdmin, function(req, res) {
   res.render('adminSerialNumber', { title: 'Loading....'});
});
router.get('/viewAdmin',userHelpers.isAdmin, function(req, res) {
  AdminMgr.GetAllAdmin(function(err,result){  
    res.render('viewAdmin', { title: 'view Admins' ,admin:result,NProgress:"fadeIn out"});
  });
});
router.get('/loadingImg',userHelpers.isAdmin, function(req, res) {
  res.render('loadingImg', { title: 'Loading....'});
});
router.get('/testPage',userHelpers.isAdmin, function(req, res) {
  CityMgr.GetCity(function(err,result){
    res.render('testPage', { title: 'Test Page',cities:result});
  });
});
router.get('/addAdmin',userHelpers.isAdmin, function(req, res) {
  res.render('addAdmin', { title: 'Add Admin'});
});
router.get('/addPrepaidVendor',userHelpers.isAdmin, function(req, res) {
  res.render('addPrepaidVendor', { title: 'prepaidVendor'});
});
router.get('/vendor',userHelpers.isAdmin, function(req, res) {
  res.render('vendor', { title: 'vendor'});
});
router.get('/vendor/vendorHasPrepaid', userHelpers.isAdmin,function(req, res) {
  res.render('vendorHasPrepaid', { title: 'vendorHasPrepaid'});
});

router.get('/getSize/:id',userHelpers.isAdmin, function(req, res) {
  SizeMgr.GetSizeByIdMeasur(req.params.id,function(result){
    res.send(result);
  });
});

router.get('/viewItem',userHelpers.isAdmin, function(req, res) {
  res.render('viewItem', { title: 'View Item'});
});
router.get('/newItem',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.GetCompany(function(err,result){
    MeasureMgr.GetAllMeasure(function(err,result1){
      res.render('newItem', { title: 'New Item',companys:result , measures:result1});
    });
  });
});

router.post('/addAdmin',userHelpers.isAdmin,function(req,res){
  AdminMgr.checkEmailAdmin(req.body.email, function(err,result){
    if(result[0]==undefined)
      user.addAdmin(req.body,function(results){
        res.send(true);
      });
    else
      res.send(false);
  });
});

router.post('/checkEmail',userHelpers.isAdmin,function(req,res){
  AdminMgr.checkEmailAdmin(req.body.email, function(err,result){
    if(result[0]==undefined)
      res.send(true);
    else
      res.send(false);
  });
});

module.exports = router;
