var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson').users;
var userHelpers =require('../app/userHelpers');
var validator = require('../app/validator_api');
var StockMgr = require('../app/stock').StockMgr;



router.get('/',userHelpers.isAdmin, function(req, res) {
  var page = userHelpers.getPage(req);
  var limit =userHelpers.getLimit(page);
  StockMgr.GetStock(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = userHelpers.getPageCount(result[1][0].cnt); 
      var pagination = userHelpers.paginate(page,pageCount);
      res.render('adminStock', { title: 'Stock',stock:result[0],pagination:pagination});
    }
  });
});

router.get('/:id',userHelpers.isAdmin, function(req, res) {;
  StockMgr.GetStockByID(req.params.id,function(err,result){
    var page = userHelpers.getPage(req);
    var limit =userHelpers.getLimit(page);
    StockMgr.GetItem(req.params.id,limit,function(err,results){
      if(result[1][0] != undefined ){
        var pageCount = userHelpers.getPageCount(result[1][0].cnt); 
        var pagination = userHelpers.paginate(page,pageCount);
        res.render('viewstock', { title: 'stock',iteam:results[0],pagination:pagination,stock:results});
      } 
    }); 
  });
});

/*delete stock*/
router.get('/delete/:id', userHelpers.isAdmin,function(req, res) {
  StockMgr.DeleteStock(req.params.id,function(err,result){
    res.send(true);
  });
});


router.post('/editStockName',userHelpers.isAdmin, function(req, res) {
  StockMgr.UpdateName(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editStockAddress', userHelpers.isAdmin,function(req, res) {
  StockMgr.Updateaddress(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editStockphone', userHelpers.isAdmin,function(req, res) {
  StockMgr.Updatephone(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/addStock',userHelpers.isAdmin,function(req, res) {
  StockMgr.AddStock(req.body,function(err,result){
    StockMgr.GetStockByID(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});


router.get('/viewStock',userHelpers.isAdmin, function(req, res) {
  var page = userHelpers.getPage(req);
  var limit =userHelpers.getLimit(page);
  StockMgr.GetStock(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = userHelpers.getPageCount(result[1][0].cnt); 
      var pagination = userHelpers.paginate(page,pageCount);
      res.render('adminStock', { title: 'Stock',stock:result[0],pagination:pagination});
    }
  });
});
/*	view stocks	*/
// router.get('/', function(req, res) {
// 	console.log("sssssssssssssssssssssssssssssssssssssss");
//   res.render('adminStock');
// });

module.exports = router;