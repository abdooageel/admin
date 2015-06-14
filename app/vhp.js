var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.VHPMgr = {

	getAllVHP : function(cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT * FROM `vendor_has_prepaid` WHERE `status` <> 0',  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	addVHP : function(body,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('INSERT INTO `vendor_has_prepaid` SET ?',body,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	getVHPById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT * FROM `vendor_has_prepaid` WHERE `status` <> 0 AND `idvendor_has_prepaid` = ?',id,function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	getSerialFromById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT `serial_from` FROM `vendor_has_prepaid` WHERE `status` <> 0 AND`idvendor_has_prepaid` = ? ',id,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	getSerialToById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT `serial_to` FROM `vendor_has_prepaid` WHERE `status` <> 0 AND`idvendor_has_prepaid` = ? ',id,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},


	getquantityById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT `quantity` FROM `vendor_has_prepaid` WHERE `status` <> 0 AND`idvendor_has_prepaid` = ? ',id,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},

	getAmountById : function(id,cb){
		mysqlMgr.connect(function (conn) {
			conn.query('SELECT `amount` FROM `vendor_has_prepaid` WHERE `status` <> 0 AND`idvendor_has_prepaid` = ? ',id,  function(err, result) {
				conn.release();
				if(err) {
					cb(err,null);
				} else {
					cb(null,result);
				}
			});
		});
	},


	UpdateSerialFrom : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor_has_prepaid` SET `serial_from` = ?,`update_time`=? WHERE `idvendor_has_prepaid` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  UpdateSerialTo: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor_has_prepaid` SET `serial_to` = ?,`update_time`=? WHERE `idvendor_has_prepaid` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  Updatequantity: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor_has_prepaid` SET `quantity` = ?,`update_time`=? WHERE `idvendor_has_prepaid` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

   UpdateAmount: function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor_has_prepaid` SET `amount` = ?,`update_time`=? WHERE `idvendor_has_prepaid` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },


   deleteVHP : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `vendor_has_prepaid` SET `status` = 0,`update_time`=? WHERE `idvendor_has_prepaid` = ?',  [date,id],  function(err, result) {
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
      conn.query('DELETE from `vendor_has_prepaid` WHERE `idvendor_has_prepaid` = ?',id,  function(err, result) {
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