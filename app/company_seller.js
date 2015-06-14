var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CompanySellerMgr = {

    GetCompanySeller :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_seller` WHERE `status` <> 0 and company_idcompany=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


UpdateCompanySellerPhone : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `phone` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
UpdateCompanyEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `email` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateCompanyFname : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `first_name` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

    UpdateCompanyLname : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `last_name` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

    UpdateCompanyEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `email` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },


  UpdateCompanyPass : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `password` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

   UpdateCompanyLevel : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `level` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  DeleteCompanySeller : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `status` = 0 ,`update_time` = ? WHERE `idcompany_seller` = ?',[date,id],  function(err, result) {
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