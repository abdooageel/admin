var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var MeasureMgr = require('../app/measure').MeasureMgr;
var SizeMgr  = require('../app/size').SizeMgr ;
var ColorMgr =require('../app/color').ColorMgr;
var userHelpers = require('../app/userHelpers');
var validator = require('../app/validator_api');



 // Measure//
router.post('/measurEditNameEn',userHelpers.isAdmin, function(req, res) {
  MeasureMgr.UpdateMeasureNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/adminMeasure',userHelpers.isAdmin, function(req, res) {
  var page = userHelpers.getPage(req);
  var limit =userHelpers.getLimit(page);
  MeasureMgr.GetMeasurelimit(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = userHelpers.getPageCount(result[1][0].cnt); 
      var pagination = userHelpers.paginate(page,pageCount);
      res.render('adminMeasure', { title: 'Measure',measure:result[0],pagination:pagination});
    }
  });
});
router.get('/getMeasure',userHelpers.isAdmin, function(req, res) {
  var page = userHelpers.getPage(req);
  var limit =userHelpers.getLimit(page);
  MeasureMgr.GetMeasure(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = userHelpers.getPageCount(result[1][0].cnt); 
      var pagination = userHelpers.paginate(page,pageCount);
      res.send(result[0]);
    }   
  });  
});
router.post('/measurEditName',userHelpers.isAdmin, function(req, res) {
  MeasureMgr.UpdateMeasureNameAR(req.body,function(err,result){
    res.send(true);   
  });
});
router.post('/addMeasure',userHelpers.isAdmin,function(req,res){
  MeasureMgr.AddMeasure(req.body,function(err,result){
    MeasureMgr.GetMeasureId(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});
router.get('/deleteMeasure/:id',userHelpers.isAdmin, function(req, res) {
  MeasureMgr.DeleteMeasure(req.params.id,function(err,result){
    res.send(true);
  });
});
router.get('/searchMeasure/:name',userHelpers.isAdmin, function(req, res) {
  var page = userHelpers.getPage(req);
  var limit =userHelpers.getLimit(page);
  MeasureMgr.searchMng(req.params.name,limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = userHelpers.getPageCount(result[1][0].cnt); 
      var pagination = userHelpers.paginate(page,pageCount);
      res.send(result[0]);
    } 
  });  
});
 ////////////

// Size //
router.post('/addSizes',userHelpers.isAdmin,function(req,res){
  validator.isSize(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      SizeMgr.AddSize(req.body,function(result){
         SizeMgr.GetSizebyId(result.insertId,function(err,resultid){
          console.log(resultid);
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});
router.post('/SizeEditNameEn',userHelpers.isAdmin, function(req, res) {
  SizeMgr.UpdateSizeNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/sizeEditNameAr', userHelpers.isAdmin,function(req, res) {
  SizeMgr.UpdateSizeNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/sizes/:id',userHelpers.isAdmin, function(req, res) {
  idSize=req.params.id;
  SizeMgr.GetSizeByIdMeasur(req.params.id,function(result){
    res.render('sizes', { title: 'sizes',size:result,id:req.params.id});
  });
});
router.get('/deleteSize/:id',userHelpers.isAdmin, function(req, res) {
  SizeMgr.GetSizebyId(req.params.id,function(err,resultt){
    SizeMgr.DeleteSize(req.params.id,function(err,result){
      res.send(resultt);
    });
  });
});
router.get('/deleteSize/:id',userHelpers.isAdmin, function(req, res) {
  SizeMgr.GetSizebyId(req.params.id,function(err,resultt){
    SizeMgr.DeleteSize(req.params.id,function(err,result){
      res.send(resultt);
    });
  });
});
router.post('/SizeEditNameEn',userHelpers.isAdmin, function(req, res) {
  SizeMgr.UpdateSizeNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/sizes/:id',userHelpers.isAdmin, function(req, res) {
  idSize=req.params.id;
  SizeMgr.GetSizeByIdMeasur(req.params.id,function(result){
    res.render('sizes', { title: 'sizes',size:result});
  });
});
//////////


// Color ////
router.post('/editGenreNameEn', userHelpers.isAdmin,function(req, res) {
  GenreMgr.UpdateGenreNameEN(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/addColor',userHelpers.isAdmin,function(req,res){
  ColorMgr.AddColor(req.body,function(err,result){
    ColorMgr.GetColorId(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});


router.get('/adminColors',userHelpers.isAdmin, function(req, res) {
  ColorMgr.GetColor(function(err,result){
    res.render('adminColors', { title: 'Colors',color:result});
  }); 
});

router.post('/editColorNameEn',userHelpers.isAdmin, function(req, res) {
  ColorMgr.UpdateColorNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editColorNameAr', userHelpers.isAdmin,function(req, res) {
  ColorMgr.UpdateColorNameAR(req.body,function(err,result){
    res.send(true);
  });
});

router.get('/deleteColor/:id',userHelpers.isAdmin, function(req, res) {
  ColorMgr.DeleteColor(req.params.id,function(err,result){
    res.send(result);
  });
});

////////////////////////////
module.exports = router;
