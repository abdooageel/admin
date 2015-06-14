var mysqlMgr = require('./mysql').mysqlMgr,

util=require('util');
exports.userMgr = {
  /* adding a new user to the system */

  AddCustomer : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `customer` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  checkEmail : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select `status` from `customer`  where `email` = ? and `status` in (1,2,3)',email,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  getFirstNameById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select `first_name` from `customer`  where `idcustomer` = ? and `status`=1 ',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }     
      });
    });
  },
  getLastNameById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select `last_name` from `customer`  where `idcustomer` = ? and `status`=1 ',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }       
      });
    });
  },
  getEmailById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select `Email` from `customer`  where `idcustomer` = ? and `status`=1 ',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }    
      });
    });
  },
  getStatusById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select `status` from `customer`  where `idcustomer` = ?  and `status`=1',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }      
      });
    });
  },
  getLevelById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select `level` from `customer`  where `idcustomer` = ? and `status`=1 ',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }      
      });
    });
  },
  getByEmail  : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select * from `customer`  where `email` = ?  and `status`=1',email,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }       
      });
    });
  },
  getbyEmail  : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select * from `customer`  where `email` = ?  and `status`=1',email,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result[0]);
        }       
      });
    });
  },
  getAllById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select * from `customer`  where `idcustomer` = ?  and `status`=1',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }       
      });
    });
  },
  getallById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select * from `customer`  where `idcustomer` = ?  and `status`=1',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result[0]);
        }       
      });
    });
  },
  getAll  : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select * from `customer` where `status`=1 ',function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }      
      });
    });
  },
  deleteById  : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('UPDATE `customer` SET `status`=0 where `idcustomer` =?',id,function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateFirstName  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  first_name= ? ,update_time=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateLastName  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  last_name= ? , update_time=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
        conn.release();
       if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateEmailById  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  email= ? , update_time=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateLevelById  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  level= ? , update_time=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateStatusById  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  status= ? , update_time=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
      conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateBalance  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  `balance`= ? ,update_time=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateMobile  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  `mobile`= ? ,`update_time`=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdatePhone  : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date =new Date();
      conn.query('UPDATE `customer` SET  `phone`= ? ,`update_time`=?  WHERE `idcustomer`=?',[body.value,date,body.pk], function(err, result) {
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
      conn.query('DELETE from `customer` WHERE `idcustomer` = ?',id,  function(err, result) {
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