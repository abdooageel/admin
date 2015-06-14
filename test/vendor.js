var assert = require("assert"); // core module
var Vendor = require('../app/vendor').VendorMgr;  // our module
var obj = require('../TestUser/mochaObj.json').vendor;

 describe('Module vendor', function(){
    it('vendor is an object ', function(){
      assert.equal(typeof Vendor, 'object');
  }),

   describe('#addVendor()',function(){
    it('Should insert without an error', function(done){
      Vendor.addVendor(obj['add_vendor'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getAllVendor()',function(){
    it('Should select without an error', function(done){
      Vendor.getAllVendor(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  //getVendorById

  describe('#getVendorById()',function(){
    it('Should select without an error', function(done){
      Vendor.getVendorById(obj['add_vendor'].idvendor,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getNameById()',function(){
    it('Should select without an error', function(done){
      Vendor.getNameById(obj['add_vendor'].idvendor,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),


   describe('#getPhoneById()',function(){
    it('Should select without an error', function(done){
      Vendor.getPhoneById(obj['add_vendor'].idvendor,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),


  describe('#UpdateName()',function(){
    it('Should update without an error', function(done){
      Vendor.UpdateName(obj['update_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }), 


  describe('#UpdatePhone ()',function(){
    it('Should update without an error', function(done){
      Vendor.UpdatePhone(obj['update_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteVendor()',function(){
    it('Should update without an error', function(done){
      Vendor.deleteVendor(obj['add_vendor'].idvendor,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),




   describe('#deleteTest()',function(){
    it('Should select without an error', function(done){
      Vendor.deleteTest(obj['add_vendor'].idvendor,function(err,result){
        if (err) throw err;
        done();
      });
    })
  })











});