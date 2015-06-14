var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var TobMgr =require('../app/tob').TobMgr;
var GenreMgr =require('../app/genre').GenreMgr;
var TogMgr =require('../app/tog').TogMgr;
var userHelpers =require('../app/userHelpers');
var validator = require('../app/validator_api');

// Tob //
router.post('/editTobName',userHelpers.isAdmin, function(req, res) {
  TobMgr.UpdateTobNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editTobNameEn',userHelpers.isAdmin, function(req, res) {
  TobMgr.UpdateTobNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/addTob',userHelpers.isAdmin,function(req, res) {
  validator.isTob(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    } 
    else {
      TobMgr.AddTob(req.body,function(err,result){
        TobMgr.GetTobId(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
  
});
router.get('/adminTypeBusiness',userHelpers.isAdmin, function(req, res) {
  TobMgr.GetTob(function(err,result){
    res.render('adminTypeBusiness', { title: 'Type of Business',TOB:result});
  });
});
router.get('/adminTypeBusiness/:id/adminGenre', userHelpers.isAdmin,function(req, res) {
  GenreMgr.GetGenreByIdtob(req.params.id,function(err,result){  
  res.render('adminGenre', { title: 'Genre',genre:result});
  });
});

router.get('/getGenre/:id',userHelpers.isAdmin, function(req, res) {
  GenreMgr.getGenreByIdCombany(req.params.id,function(err,result){  
    res.send(result);
  });
});
router.get('/adminTypeBusiness',userHelpers.isAdmin, function(req, res) {
  TobMgr.GetTob(function(err,result){
    res.render('adminTypeBusiness', { title: 'Type of Business',TOB:result});
  });
});
router.get('/adminTypeBusiness/:id/adminGenre',userHelpers.isAdmin, function(req, res) {
  GenreMgr.GetGenreByIdtob(req.params.id,function(err,result){  
  res.render('adminGenre', { title: 'Genre',genre:result});
  });
});
router.get('/adminTypeBusiness/adminGenre/:id/adminTypeGenre', userHelpers.isAdmin,function(req, res) {
  TogMgr.GetTogById(req.params.id,function(err,result){
    res.render('adminTypeGenre', { title: 'Type of Genre',tog:result});
  });
});
router.get('/deleteTOB/:id', userHelpers.isAdmin,function(req, res) {
  TobMgr.DeleteTob(req.params.id,function(err,result){
    res.send(result);
  });
});
////////
///////////Tog//////////////
router.get('/deleteTog/:id',userHelpers.isAdmin, function(req, res) {
  TogMgr.GetidgenreByidtog(req.params.id,function(err,id){ 
    TogMgr.DeleteTog(req.params.id,function(err,result){
      res.send(id);
    });
  });
});
router.get('/deletegenreee/:id', userHelpers.isAdmin,function(req, res) {
  TobMgr.GetIdTobByIdGenre(req.params.id,function(err,idtob){
    GenreMgr.DeleteGenre(req.params.id,function(err,result){
      res.send(idtob);
    });
  });
});
router.post('/editGenreName',userHelpers.isAdmin, function(req, res) {
  GenreMgr.UpdateGenreNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editTogName',userHelpers.isAdmin, function(req, res) {
  TogMgr.UpdateTogName(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editTogNameEn',userHelpers.isAdmin, function(req, res) {
  TogMgr.UpdateTogNameEn(req.body,function(err,result){
    res.send(true);
  });
});
//////////////////
module.exports = router;
