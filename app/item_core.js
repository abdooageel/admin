var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.itemCoreMgr = {
/////////////////// ITEM ///////////////////////////////////////////
  getItemCore :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `item_core` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  addItemCore : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `item_core` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  updateItemCoreNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item_core` SET `name` = ?,`update_time`=? WHERE `iditem_core` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err,null);
        } else {
          cb(null,result); 
        }
      });
    });
  },
  
  UpdateItemCoreNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item_core` SET `name_en` = ?,`update_time`=? WHERE `iditem_core` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err,null);
        } else {
          cb(null,result); 
        }
      });
    });
  },

  UpdateItemDesc : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item_core` SET `item_desc` = ?,`update_time`=? WHERE `iditem_core` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },


  DeleteItemCore : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item_core` SET `status` = 0 ,`update_time` = ? WHERE `iditem_core` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
//////////////////////////////////////////////////////////////////////////
 
  
};
