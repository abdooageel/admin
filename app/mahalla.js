var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.MahallaMgr = {
	
  addMahalla : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `mahalla` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getMahallaInfo : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `mahalla` WHERE `status` <> 0 ORDER BY  `mahalla`.`idmahalla` DESC ',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getMahallaId :function(id,cb){
    mysqlMgr.connect(function (conn) {
      console.log("im h");
      conn.query('SELECT `m`.`idmahalla`,`m`.`name` as mahallaName, `m`.`name_en` as mahallaName_en, `a`.`name` as areaName, `a`.`name_en` as areaName_en FROM `mahalla` m,`area` a WHERE `m`.`status` <> 0 AND `idarea`=`area_idarea` AND `idmahalla`=?',id, function(err, result) {
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

  getMahallaLimit :function(limit,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT mahalla.idmahalla,mahalla.name as mahallaName, mahalla.name_en as mahallaName_en, area.name as areaName, area.name_en as areaName_en FROM `mahalla`,`area` WHERE mahalla.status <> 0 AND idarea=area_idarea limit ?,10 ; SELECT count(*) as cnt FROM `mahalla` WHERE `status` <> 0 ',limit, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  getMahallaInfoByNameAr : function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `mahalla` WHERE `status` <> 0 and name=?',name,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getMahallaInfoByNameEn : function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `mahalla` WHERE `status` <> 0 and name_en=?',name,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getMahallaInfoByIdArea : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `mahalla` WHERE `status` <> 0 and area_idarea=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateMahallaNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `mahalla` SET `name` = ?,`update_time`=? WHERE `idmahalla` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateMahallaNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `mahalla` SET `name_en` = ?,`update_time`=? WHERE `idmahalla` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteMahalla : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `mahalla` SET `status` = 0 ,`update_time` = ? WHERE `idmahalla` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `mahalla` WHERE `idmahalla` = ?',id,  function(err, result) {
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