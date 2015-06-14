var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.TogMgr = {

  GetTogById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `tog` WHERE `status` <> 0 and genre_idgenre=?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetidgenreByidtog :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `tog` WHERE `status` <> 0 and idtog=?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

    UpdateTogName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `tog` SET `name` = ?,`update_time`=? WHERE `idtog` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

    UpdateTogNameEn : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `tog` SET `name_en` = ?,`update_time`=? WHERE `idtog` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },



   DeleteTog : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `tog` SET `status` = 0 ,`update_time` = ? WHERE `idtog` = ?',[date,id],  function(err, result) {
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