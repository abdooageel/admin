var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.AreaMgr = {
	
	addArea : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `area` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getAreaInfo : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT area.idarea,area.name as areaName, area.name_en as areaName_en, city.name as cityName, city.name_en as cityName_en FROM `area`,`city` WHERE area.status <> 0 AND idcity=city_idcity ORDER BY  `area`.`idarea` DESC ',  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getAreaInfoByCity : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `area` WHERE `status` <> 0 AND `city_idcity`=? ',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getAreaInfoById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `a`.`idarea`,`a`.`name` as areaName, `a`.`name_en` as areaName_en, `c`.`name` as cityName, `c`.`name_en` as cityName_en FROM `area` a,`city` c WHERE `a`.`status` <> 0 AND `idcity`=`city_idcity` AND `idarea`=?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getAreaInfoByName : function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `area` WHERE `status` <> 0 and name =?',name,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getAreaInfoByNameEn : function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `area` WHERE `status` <> 0 and name_en =?',name,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateAreaNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `area` SET `name` = ?,`update_time`=? WHERE `idarea` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateAreaNameEn : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `area` SET `name_en` = ?,`update_time`=? WHERE `idarea` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  DeleteArea : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `area` SET `status` = 0 ,`update_time` = ? WHERE `idarea` = ?',[date,id],  function(err, result) {
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
      conn.query('DELETE from `area` WHERE `idarea` = ?',id,  function(err, result) {
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
