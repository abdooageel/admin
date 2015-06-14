var mysqlMgr = require('./mysql').mysqlMgr,
delutil=require('util');
exports.CompanyAddressMgr = {
/////////////////// COMPANY ADDRESS ///////////////////////////////////////////
  GetCompanyAddress :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_address` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getCompanyAddressInfoById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `company_address`.idcompany_address,`company_address`.latit,`company_address`.longit,`company_address`.address_desc,`school`.name as na   FROM `company_address`,`school` WHERE `company_address`.`status` <> 0 and `idcompany_address`=? and school_idschool=idschool',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

   GetCompanyAddressByIdCompany :function(id,cb){
    mysqlMgr.connect(function (conn) {
      //('SELECT *,`school`.name FROM `company_address`,`school` WHERE `status` <> 0 and `company_idcompany`=? and  school_idschool=idschool',id,  function(err, result) {
      conn.query('SELECT `company_address`.idcompany_address,`company_address`.latit,`company_address`.longit,`company_address`.address_desc,`school`.name as na   FROM `company_address`,`school` WHERE `company_address`.`status` <> 0 and `company_idcompany`=? and school_idschool=idschool',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  AddCompanyAddress : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var latit = body.latit;
      var longit = body.longit;
      var bb = body.default;
      var company_idcompany = body.idcompany;
      var school_idschool = body.idschool;
      var address_desc = body.address_desc;
      conn.query('INSERT INTO `company_address`(`latit`, `longit`, `default`, `company_idcompany`, `school_idschool`, `address_desc`) VALUES (?,?,?,?,?,?)',[latit, longit, bb, company_idcompany, school_idschool, address_desc],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateCompanyAddressLatit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address` SET `latit` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateCompanyAddressLongit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `longit` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

   UpdateCompanyAddressDesc : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `address_desc` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyAddressDefault : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `default` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyAddressIdCompany : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `company_idcompany` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCompanyAddresssIdSchool : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `school_idschool` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteCompanyAddresss : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address` SET `status` = 0 ,`update_time` = ? WHERE `idcompany_address` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `company_address` WHERE `idcompany_address` = ?',id,  function(err, result) {
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
