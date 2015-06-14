var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.VendorMgr = {
	
	getAllVendor : function(cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT * FROM `vendor` WHERE `status` <> 0',  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	addVendor : function(body,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('INSERT INTO `vendor` SET ?',body,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},


	getVendorById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT * FROM `vendor` WHERE `status` <> 0 AND `idvendor` = ?',id,function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	getNameById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT `name` FROM `vendor` WHERE `status` <> 0 AND`idvendor` = ? ',id,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},


	getPhoneById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT `phone` FROM `vendor` WHERE `status` <> 0 AND`idvendor` = ? ',id,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},


	 UpdateName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor` SET `name` = ?,`update_time`=? WHERE `idvendor` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdatePhone : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor` SET `phone` = ?,`update_time`=? WHERE `idvendor` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  deleteVendor : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor` SET `status` = 0,`update_time`=? WHERE `idvendor` = ?',  [date,id],  function(err, result) {
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
      conn.query('DELETE from `vendor` WHERE `idvendor` = ?',id,  function(err, result) {
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