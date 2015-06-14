var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CustomerAddressMgr = {
/////////////////// CUSTOMER ADDRESS ///////////////////////////////////////////
  GetCustomerAddress :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `customer_address` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  AddCustomerAddress : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `customer_address` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateCustomerAddressLatit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address` SET `latit` = ?,`update_time`=? WHERE `idcustomer_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
  UpdateCustomerAddressLongit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address`  SET `longit` = ?,`update_time`=? WHERE `idcustomer_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCustomerAddressDefault : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address`  SET `default` = ?,`update_time`=? WHERE `idcustomer_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateCustomerAddressDesc : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address`  SET `address_desc` = ?,`update_time`=? WHERE `idcustomer_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  CustomerAddressIdCustomer : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address`  SET `customer_idcustomer` = ?,`update_time`=? WHERE `idcustomer_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  CustomerAddressIdSchool : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address`  SET `school_idschool` = ?,`update_time`=? WHERE `idcustomer_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteCustomerAddress : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `customer_address` SET `status` = 0 ,`update_time` = ? WHERE `idcustomer_address` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `customer_address` WHERE `idcustomer_address` = ?',id,  function(err, result) {
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
