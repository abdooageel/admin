var mysqlMgr = require('./mysql').mysqlMgr,

util=require('util');
exports.rand = {
  /* adding a new user to the system */

  saveOneRow :function(random,random_code,amount,serial,salt,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `prepaid` (`prepaid`,`prepaid_hash`,`amount`,`serial_no`,`salt`) VALUES(?,?,?,?,?) ;',[random,random_code,amount,serial,salt], function(err, results) {
      conn.query('INSERT INTO `prepaid_live` (`prepaid_hash`,`amount`,`serial_no`,`salt`) VALUES(?,?,?,?)',[random_code,amount,serial,salt],function(err,result){
       conn.release();
        if(err) {
         // util.log(err);
          process.exit(code=0);
        } else {
         console.log("Saved one record successfully");
         process.exit(code=0);
         cb(results);
          
        }

      }); 
    }); 
  });
  }, 
  
  saveRandomNumber: function(plive,cb){
    mysqlMgr.connect(function (conn) {
     // console.log(plive);
      // /INSERT INTO `prepaid_live` (`prepaid_hash`,`amount`,`serial_no`) VALUES (?,?,?)  
     // if(plive.length == pre.length)
     // {
      conn.query('INSERT INTO `prepaid_live` (`prepaid_hash`,`serial_no`,`amount`,`salt`) VALUES ?;',[plive], function(err, results) {
     
        conn.release();
        if(err) {
         //util.log(err);
        } else {
          
          cb(results);
        }

      });  
            
  
    
    });
  }, 
  getcountp :  function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as cp from prepaid ',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },


  getcountplive :  function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as cl from prepaid_live ',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },


    saveRandomNumberr: function(pre,cb){
    mysqlMgr.connect(function (conn) {
       conn.query('INSERT INTO `prepaid`(`prepaid`, `prepaid_hash`,`serial_no`,`amount`,`salt`) VALUES ?;',[pre], function(err, res) {
        conn.release();
        if(err) {
         util.log(err);     
        } else {
          
          cb(res);
        }  
            });  
    });
  },


  usedCard : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as c,sum(amount) as s from prepaid_live where status=2',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
                        console.log(result);
          cb(result);  
        }
      });
    });
  },

  ActiveprepaidCard : function(num,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as c,sum(amount) as s from prepaid where  amount=? ',num,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },

   UseitActiveprepaidCard : function(num,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as c,sum(amount) as s from prepaid_live where  amount=? and status=2 ',num,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },
  
  getRandomNumber : function(random,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select  prepaid from prepaid  where prepaid = ? ',random,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },

  getTotalmony : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select  sum(amount) as totalMony from prepaid',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },


  getLastNumber : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT serial_no FROM prepaid ORDER BY idprepaid DESC LIMIT 1',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },


  NumberActiveprepaidCard : function(cb){
    mysqlMgr.connect(function (conn) {
    //  var q1="select count(*) as c from prepaid;"
      conn.query('select count(*) as c from prepaid ',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  }



  };
