var assert = require("assert"); // core module
var customer = require('../app/user_app').userMgr;  // our module
var obj = require('../TestUser/mochaObj.json').customer;

  describe('Module customer', function(){
    it('customer is an object with a fucntion ', function(){
      assert.equal(typeof customer, 'object');
  }),

  describe('#AddCustomer()',function(){
    it('Should inser without an error', function(done){
      customer.AddCustomer(obj["add_customer"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getAll()',function(){
    it('Should update without an error', function(done){
      customer.getAll(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getAllById()',function(){
    it('Should update without an error', function(done){
      customer.getAllById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getFirstNameById()',function(){
    it('Should update without an error', function(done){
      customer.getFirstNameById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getLastNameById()',function(){
    it('Should update without an error', function(done){
      customer.getLastNameById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getEmailById()',function(){
    it('Should update without an error', function(done){
      customer.getEmailById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getLevelById()',function(){
    it('Should update without an error', function(done){
      customer.getLevelById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getStatusById()',function(){
    it('Should update without an error', function(done){
      customer.getStatusById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#checkEmail()',function(){
    it('Should update without an error', function(done){
      customer.checkEmail(obj['customer_email'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateFirstName()',function(){
    it('Should update without an error', function(done){
      customer.UpdateFirstName(obj['update_customer_first'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateLastName()',function(){
    it('Should update without an error', function(done){
      customer.UpdateLastName(obj['update_customer_last'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateEmailById()',function(){
    it('Should update without an error', function(done){
      customer.UpdateEmailById(obj['update_customer_email'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateLevelById()',function(){
    it('Should update without an error', function(done){
      customer.UpdateLevelById(obj['update_customer_level'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateStatusById()',function(){
    it('Should update without an error', function(done){
      customer.UpdateStatusById(obj['update_customer_status'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateBalance()',function(){
    it('Should update without an error', function(done){
      customer.UpdateBalance(obj['update_customer_balance'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateMobile()',function(){
    it('Should update without an error', function(done){
      customer.UpdateMobile(obj['update_customer_mobile'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#UpdatePhone()',function(){
    it('Should update without an error', function(done){
      customer.UpdatePhone(obj['update_customer_phone'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  describe('#deleteById()',function(){
    it('Should delete without an error', function(done){
      customer.deleteById(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      customer.deleteTest(obj['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })

});
