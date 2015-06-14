var assert = require("assert"); // core module
var CustomerAddressMgr = require('../app/customer_address').CustomerAddressMgr;  // our module
var customerMgr = require('../app/user_app').userMgr;  // our module
var customer = require('../TestUser/mochaObj.json').customer;
var obj = require('../TestUser/mochaObj.json').customerAddress;

  describe('Module customer Address', function(){
    it('customer is an object with a fucntion called ', function(){
      assert.equal(typeof CustomerAddressMgr, 'object');
  }),
//////////////////////////////////////////////////////////////////////////////////////////
  describe('#AddCustomer()',function(){ 
    it('Should inser without an error', function(done){
      customerMgr.AddCustomer(customer["add_customer"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

///////////////////////////////////////////////////////////////////////////////////////////////////
  describe('#AddCustomerAddress()',function(){
    it('Should inser without an error', function(done){
      CustomerAddressMgr.AddCustomerAddress(obj["addaddress"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetCustomerAddress()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.GetCustomerAddress(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCustomerAddressLatit()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.UpdateCustomerAddressLatit(obj["update_customer_latit"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCustomerAddressLongit()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.UpdateCustomerAddressLongit(obj["update_customer_longit"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCustomerAddressDefault()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.UpdateCustomerAddressDefault(obj["update_customer_default"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#CustomerAddressIdCustomer()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.CustomerAddressIdCustomer(obj["update_customer_idcustomer"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#CustomerAddressIdSchool()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.CustomerAddressIdSchool(obj["update_customer_idschool"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCustomerAddressDesc()',function(){
    it('Should update without an error', function(done){
      CustomerAddressMgr.UpdateCustomerAddressDesc(obj["update_customer_desc"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteCustomerAddress()',function(){
    it('Should delete without an error', function(done){
      CustomerAddressMgr.DeleteCustomerAddress(obj["delete_customer"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest() Address',function(){
    it('Should delete test without an error', function(done){
      CustomerAddressMgr.deleteTest(obj["delete_customer"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  /////////////////////////////////////////////////////////////////////////////////////
  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      customerMgr.deleteTest(customer['delete_customer'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
//////////////////////////////////////////////////////////////////////////////

});
