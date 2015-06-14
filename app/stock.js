var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.StockMgr = {
///////////////////stock//////////////////
  GetStock :function(limit,cb){
    mysqlMgr.connect(function (conn) {
      //SELECT o.idorder FROM orders   WHERE o.deleted =1  limit ?,10; SELECT COUNT(*) as cnt FROM orders as o, employee as emp ,department as dept WHERE o.deleted=1  AND  o.requestEmploye=emp.idemployee AND dept.iddepartments=emp.iddepartment;',[limit],function(err, result1) {
     conn.query('SELECT * FROM `stock` WHERE `status` <> 0 limit ?,10 ; SELECT COUNT(*) as cnt FROM `stock` WHERE `status` <> 0 ',limit, function(err, result)
     {
     	console.log(result);
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteStock : function(id,cb){
    console.log("you are in the DeleteStock");
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      console.log(id);
      conn.query('UPDATE `stock` SET`status` = 0 ,`update_time` = ? WHERE `idstock` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  AddStock : function(body,cb){
    mysqlMgr.connect(function (conn) {
      console.log(body);
      conn.query('INSERT INTO `stock` SET ?',body,  function(err, result) {
        console.log(result);
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetStockByID :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `stock` WHERE `status` <> 0 AND `idstock`=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateName : function(body,cb){
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

  Updateaddress : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `stock` SET  `address` = ?,`update_time`=? WHERE `idstock` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  Updatephone : function(body,cb){
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

   GetItem : function(id,limit,cb){
    mysqlMgr.connect(function (conn) {
      console.log(id);
      var date = new Date();
      conn.query('SELECT * FROM `item` WHERE `status` <> 0 AND`stock_idstock` = ? limit ?,10 ; SELECT COUNT(*) as cnt FROM `item` WHERE `status` <> 0' ,id,limit, function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
};
