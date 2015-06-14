var assert = require("assert"); // core module
var CompanySeller = require('../app/seller_app').sellerMgr;  // our module
var CompanyMgr = require('../app/company').CompanyMgr;  // our module
var adminMgr = require('../app/admin').AdminMgr;  // our module
var tobMgr = require('../app/tob').TobMgr;  // our module
var company = require('../TestUser/mochaObj.json').company;
var admin = require('../TestUser/mochaObj.json').admin;
var tob = require('../TestUser/mochaObj.json').tob;
var obj = require('../TestUser/mochaObj.json').seller;

  describe('Module seller', function(){
    it('seller is an object with a fucntion ', function(){
      assert.equal(typeof CompanySeller, 'object');
  }),

  //////////////////////////////////////////////////////////////////////////////////////////
  describe('#AddTob()',function(){
    it('Should inser without an error', function(done){
      tobMgr.AddTob(tob['add_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#AddAdmin()',function(){
    it('Should inser without an error', function(done){
      adminMgr.AddAdmin(admin['add_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#AddCompany()',function(){
    it('Should inser without an error', function(done){
      CompanyMgr.AddCompany(company["add_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
///////////////////////////////////////////////////////////////////////////////////////////////////
  describe('#AddSeller()',function(){
    it('Should inser without an error', function(done){
      CompanySeller.AddSeller(obj["add_seller"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetAllSeller()',function(){
    it('Should update without an error', function(done){
      CompanySeller.GetAllSeller(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetSellerByCompanyId()',function(){
    it('Should update without an error', function(done){
      CompanySeller.GetSellerByCompanyId(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetNameById()',function(){
    it('Should update without an error', function(done){
      CompanySeller.GetNameById(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetEmailById()',function(){
    it('Should update without an error', function(done){
      CompanySeller.GetEmailById(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetLevelById()',function(){
    it('Should update without an error', function(done){
      CompanySeller.GetLevelById(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetStatusById()',function(){
    it('Should update without an error', function(done){
      CompanySeller.GetStatusById(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#checkEmailSaller()',function(){
    it('Should update without an error', function(done){
      CompanySeller.checkEmailSaller(obj['seller_email'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateFirstName()',function(){
    it('Should update without an error', function(done){
      CompanySeller.UpdateFirstName(obj['update_seller_first'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateLastName()',function(){
    it('Should update without an error', function(done){
      CompanySeller.UpdateLastName(obj['update_seller_last'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateEmail()',function(){
    it('Should update without an error', function(done){
      CompanySeller.UpdateEmail(obj['update_seller_email'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateLevel()',function(){
    it('Should update without an error', function(done){
      CompanySeller.UpdateLevel(obj['update_seller_level'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompany()',function(){
    it('Should update without an error', function(done){
      CompanySeller.UpdateCompany(obj['update_seller_company'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteSeller()',function(){
    it('Should delete without an error', function(done){
      CompanySeller.DeleteSeller(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      CompanySeller.deleteTest(obj['delete_seller'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
/////////////////////////////////////////////////////////////////////////////////////

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      CompanyMgr.deleteTest(company["delete_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      adminMgr.deleteTest(admin['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      tobMgr.deleteTest(tob['delete_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
//////////////////////////////////////////////////////////////////////////////

});
