var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var validator = require('../app/validator_api');
var CompanyMgr=require('../app/company').CompanyMgr;
var CompanySellerMgr=require('../app/company_seller').CompanySellerMgr;
var CompanyAddressMgr=require('../app/company_address').CompanyAddressMgr;
var TobMgr=require('../app/tob').TobMgr;
var CityMgr = require('../app/city').CityMgr;
var userHelpers = require('../app/userHelpers');
var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra');

// Company ///
router.post('/addCompany',userHelpers.isAdmin,function(req,res){
  validator.isCompany(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      CompanyMgr.AddCompany(req.body,function(err,result){
        CompanyMgr.getCompanyId(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});

router.get('/adminCompany',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.GetCompany(function(err,result){
    TobMgr.GetTob(function(err,result1){
      res.render('adminCompany', { title: 'Company',company:result,tob:result1});
    });
  });
});
router.post('/editCompanyName',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.UpdateCompanyNameAR (req.body,function(err,result){
    res.send(true);
  });
});
router.post('/UpdateCompanyLevel',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.UpdateCompanyLevel(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyNameEn',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.UpdateCompanyNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyLevel',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.UpdateCompanyLevel(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyEmail',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.UpdateCompanyEmail(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyPhone',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.UpdateCompanySellerPhone(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyLongit',userHelpers.isAdmin, function(req, res) {
  CompanyAddressMgr.UpdateCompanyAddressLongit(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyLatit',userHelpers.isAdmin, function(req, res) {
  CompanyAddressMgr.UpdateCompanyAddressLatit(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanyDesc',userHelpers.isAdmin, function(req, res) {
  CompanyAddressMgr.UpdateCompanyAddressDesc(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/deleteCompany/:id',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.DeleteCompany(req.params.id,function(err,result){
    res.send(result);
  });
});
router.get('/adminCompany/:id/adminCompanyView', userHelpers.isAdmin,function(req, res) {
  idaCompanyView=req.params.id;
  CompanyMgr.GetCompanyInfoById(req.params.id,function(err,result){ 
    res.render('adminCompanyView', { title: 'Company view',com:result});
  });
});
router.post('/savePhoto',userHelpers.isAdmin,function(req, res) {
  if (req.url == '/savePhoto') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      var temp_path = files.logo.path;
      var file_name = files.logo.name;
      var new_location = 'public/company_picture/';
      fs.copy(temp_path, new_location + file_name, function(err) {  
          if (err) {
            
          } else {
              CompanyMgr.addPhoto(idaCompanyView,file_name,function(err,result){  
            });
              res.redirect('/company/adminCompany/'+idaCompanyView+'/adminCompanyView');  
          }
      });     
    });
  }
});
///////////////////////

// CompanyAddress /////
router.get('/adminCompany/:id/adminCompanyAddress',userHelpers.isAdmin, function(req, res) {
  idcompany=req.params.id;
  CompanyAddressMgr.GetCompanyAddressByIdCompany(req.params.id,function(err,result){
    CityMgr.GetCity(function(err,result1){  
      res.render('adminCompanyAddress', { title: 'CompanyAddress',address:result,cities:result1,id:req.params.id});
    });
  });
});
router.post('/addAddress',userHelpers.isAdmin,function(req,res){
  validator.isAddres(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      CompanyAddressMgr.AddCompanyAddress(req.body,function(err,result){
         CompanyAddressMgr.getCompanyAddressInfoById(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});
//////////////////////


// CompanySeller ////

router.get('/adminCompany/:id/adminSellerCompany',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.GetCompanySeller(req.params.id,function(err,result){ 
    res.render('adminSellerCo', { title: 'Company Seller',seller:result});
  });
});
router.post('/editCompanySellerFname', userHelpers.isAdmin,function(req, res) {
  CompanySellerMgr.UpdateCompanyFname(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanySellerLname',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.UpdateCompanyLname(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanySellerPass',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.UpdateCompanyPass(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editCompanySellerEmail',userHelpers.isAdmin, function(req, res) {
  CompanySellerMgr.UpdateCompanyEmail(req.body,function(err,result){
    res.send(true);
  });
});


router.get('/deleteCompanySeller/:id',userHelpers.isAdmin, function(req, res) {
  CompanyMgr.GetCompanyInfoById(req.params.id,function(err,resulttt){
    CompanySellerMgr.DeleteCompanySeller(req.params.id,function(err,result){
     // console.log(resulttt);
      res.send(resulttt);
    });
  });
});
 //////////////

module.exports = router;
