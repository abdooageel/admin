var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.TobMgr = {
/////////////////// TOB ///////////////////////////////////////////
  GetTob :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `tob` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetTobId :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `tob` WHERE `status` <> 0 AND `idtob`=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetIdTobByIdGenre :function(idg,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT tob_idtob FROM `genre` WHERE `status` <> 0 and idgenre=?',idg,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  

  AddTob : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `tob` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateTobNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `tob` SET `name` = ?,`update_time`=? WHERE `idtob` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateTobNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `tob` SET `name_en` = ?,`update_time`=? WHERE `idtob` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  
  DeleteTob : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `tob` SET `status` = 0 ,`update_time` = ? WHERE `idtob` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `tob` WHERE `idtob` = ?',id,  function(err, result) {
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
