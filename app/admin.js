var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
exports.AdminMgr = {
  /* adding a new user to the system */
  GetAllAdmin : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  AddAdmin : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `admin` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetAdminById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0 AND `idadmin` = ?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
// get admin for login
  GetadminById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0 AND `idadmin` = ?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result[0]);
        }
      });
    });
  },

  getAdminByEmail : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0 AND`email` = ? ',email,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
// for login
  getadminByEmail : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0 AND`email` = ? ',email,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result[0]);
        }
      });
    });
  },
  GetEmailById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `email` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  GetLevelById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `level` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetStatusById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `status` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  checkEmailAdmin : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `status` FROM `admin` WHERE `status` = 1 AND`email` = ? ',email,  function(err, result) {
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
      conn.query('UPDATE `admin` SET `name` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `email` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateLevel : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `level` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  DeleteAdmin : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `status` = 0,`update_time`=? WHERE `idadmin` = ?',  [date,id],  function(err, result) {
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
      conn.query('DELETE from `admin` WHERE `idadmin` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  }
  
};
