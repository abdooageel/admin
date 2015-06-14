var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.StockMgr = {
  
  getStock:function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `stock` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

    getStockById:function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `stock` WHERE `status` <> 0 AND idstock=?',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


    getStockByName:function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `stock` WHERE `status` <> 0 AND name=?',name,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


  addStock : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `stock` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  updateName: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `stock` SET `name` = ?,`update_time`=? WHERE `idstock` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  updateaddress: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `stock` SET `address` = ?,`update_time`=? WHERE `idstock` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  updatePhone: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `stock` SET `phone` = ?,`update_time`=? WHERE `idstock` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  deleteStock : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `stock` SET `status` = 0 ,`update_time` = ? WHERE `idstock` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },















}