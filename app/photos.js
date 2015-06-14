var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.photoMgr = {
/////////////////// ITEM ///////////////////////////////////////////
  getPhoto :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `photos` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  addPhoto : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `photos` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getPhotoId :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `photos` WHERE `status` <> 0 AND `idphotos` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  updatePhotoName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `photos` SET `name` = ?,`update_time`=? WHERE `idphotos` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err,null);
        } else {
          cb(null,result); 
        }
      });
    });
  },
  

  DeletePhoto : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `photos` SET `status` = 0 ,`update_time` = ? WHERE `idphotos` = ?',[date,id],  function(err, result) {
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
