var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.ColorMgr = {
/////////////////// COLOR ///////////////////////////////////////////
  GetColor :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `color` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetColorId:function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `color` WHERE `status` <> 0 AND `idcolor`=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  AddColor : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `color` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateColorNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `color` SET `name` = ?,`update_time`=? WHERE `idcolor` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateColorNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `color` SET `name_en` = ?,`update_time`=? WHERE `idcolor` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteColor : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `color` SET `status` = 0 ,`update_time` = ? WHERE `idcolor` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  deleteTest : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('DELETE from `color` WHERE `idcolor` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  }
//////////////////////////////////////////////////////////////////////////
 
  
};
