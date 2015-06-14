var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.ItemMgr = {
/////////////////// ITEM ///////////////////////////////////////////
  GetItem :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `item` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddItem : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `item` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  UpdateItemNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item` SET `name` = ?,`update_time`=? WHERE `iditem` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateItemNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item` SET `name_en` = ?,`update_time`=? WHERE `iditem` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateItemIdColor : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item` SET `color_idcolor` = ?,`update_time`=? WHERE `iditem` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateItemIdCompanySeller : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item` SET `company_seller_idcompany_seller` = ?,`update_time`=? WHERE `iditem` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateItemCompanyIdCompany : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item` SET `company_seller_company_idcompany` = ?,`update_time`=? WHERE `iditem` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },


  DeleteGenre : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `item` SET `status` = 0 ,`update_time` = ? WHERE `iditem` = ?',[date,id],  function(err, result) {
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
