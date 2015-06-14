var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CustomerMgr = {

  getCustomer :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `customer` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getCustomerById :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `customer` WHERE `status` <> 0 AND idcustomer=?',id, function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getCustomerByName :function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `customer` WHERE `status` <> 0 AND first_name=?',name, function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  getCustomerByEmail :function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `customer` WHERE `status` <> 0 AND email=?',email, function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


  UpdateCustomerFName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer` SET `first_name` = ?,`update_time`=? WHERE `idcustomer` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCustomerLName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer` SET `last_name` = ?,`update_time`=? WHERE `idcustomer` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCustomerEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer` SET `email` = ?,`update_time`=? WHERE `idcustomer` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteCustomer : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer` SET `status` = 0 ,`update_time` = ? WHERE `idcustomer` = ?',[date,id],  function(err, result) {
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
