var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
exports.sellerMgr = {
  /* adding a new user to the system */
  GetAllSeller : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_seller` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
    
  AddSeller : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `company_seller` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetSellerByCompanyId : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_seller` WHERE `status` <> 0 AND `company_idcompany` = ?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetNameById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `first_name`,`last_name` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  GetEmailById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `email` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
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
      conn.query('SELECT `level` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
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
      conn.query('SELECT `status` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  checkEmailSaller : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `status` FROM `company_seller` WHERE `status` = 1 AND`email` = ? ',email,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateFirstName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `first_name` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateLastName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `last_name` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
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
      conn.query('UPDATE `company_seller` SET `email` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
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
      conn.query('UPDATE `company_seller` SET `level` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompany: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `company_idcompany` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  DeleteSeller : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `status` = 0,`update_time`=? WHERE `idcompany_seller` = ?',  [date,id],  function(err, result) {
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
      conn.query('DELETE from `company_seller` WHERE `idcompany_seller` = ?',id,  function(err, result) {
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
