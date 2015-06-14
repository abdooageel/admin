var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.itemSizeMgr = {
  addItemSize : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `item_has_size` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

};