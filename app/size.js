var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.SizeMgr = {
/////////////////// SIZE ///////////////////////////////////////////
  GetSize :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `size` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },


  GetSizebyId :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `size` WHERE `status` <> 0 and idsize=?',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          console.log(result);
          cb(null,result);
        }
      });
    });
  },

  GetSizeByIdMeasur :function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `size` WHERE `status` <> 0 and measure_idmeasure=?',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddSize : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var name = body.name;
      var name_en = body.name_en;
      var idmeasure =body.idmeasure;
      console.log(body);
      conn.query('INSERT INTO `size`(`name`, `name_en`, `measure_idmeasure`) VALUES (?,?,?)',[name, name_en, idmeasure],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  
  UpdateSizeNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `size` SET `name` = ?,`update_time`=? WHERE `idsize` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateSizeNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `size` SET `name_en` = ?,`update_time`=? WHERE `idsize` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },


  UpdateSizeIdMeasure: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `size` SET `measure_idmeasure` = ?,`update_time`=? WHERE `idsize` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  DeleteSize : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `size` SET `status` = 0 ,`update_time` = ? WHERE `idsize` = ?',[date,id],  function(err, result) {
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
