var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CompanyMgr = {
/////////////////// COMPANY ///////////////////////////////////////////


// add photo
addPhoto : function(id,path,cb){
      mysqlMgr.connect(function (conn) {
        console.log(path);
      var date = new Date();
      conn.query('UPDATE `company` SET `logo` = ?,`update_time`=? WHERE `idcompany` = ?',[path,date,id],function(err, result) {
        conn.release();
        if(err) { 
          console.log(err);
          cb(err,null);

        } else {
          cb(null,result);
        }
      });
    });

},


  GetCompany :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getCompanyId :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company` WHERE `status` <> 0 AND `idcompany` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

    GetCompanyInfoById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT *,`company`.level as lcompany FROM `company`,`company_seller` WHERE `company`.`status` <> 0 and `idcompany`=? and `company_idcompany`=`idcompany`',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          console.log(result);
          cb(null,result);
        }
      });
    });
  },

  AddCompany : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `company` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateCompanyNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company` SET `name` = ?,`update_time`=? WHERE `idcompany` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateCompanyNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company`  SET `name_en` = ?,`update_time`=? WHERE `idcompany` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyLogo : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company`  SET `logo` = ?,`update_time`=? WHERE `idcompany` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyLevel : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company`  SET `level` = ?,`update_time`=? WHERE `idcompany` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyIdAdmin : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company`  SET `admin_idadmin` = ?,`update_time`=? WHERE `idcompany` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyIdTop : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company`  SET `tob_idtob` = ?,`update_time`=? WHERE `idcompany` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteCompany : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company` SET `status` = 0 ,`update_time` = ? WHERE `idcompany` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `company` WHERE `idcompany` = ?',id,  function(err, result) {
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
