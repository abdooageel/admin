var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CityMgr = {
/////////////////// CITY ///////////////////////////////////////////
  GetCity :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `city` WHERE `status` <> 0 ORDER BY `idcity` DESC ',  function(err, result1) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result1);
        }
      });
    });
  },

  GetCityById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `city` WHERE `status` <> 0 AND `idcity`=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  AddCity : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `city` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateCityNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `city` SET `name` = ?,`update_time`=? WHERE `idcity` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateCityNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `city` SET `name_en` = ?,`update_time`=? WHERE `idcity` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteCity : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `city` SET `status` = 0 ,`update_time` = ? WHERE `idcity` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `city` WHERE `idcity` = ?',id,  function(err, result) {
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
