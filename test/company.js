var assert = require("assert"); // core module
var company = require('../app/company').CompanyMgr;  // our module
var adminMgr = require('../app/admin').AdminMgr;  // our module
var tobMgr = require('../app/tob').TobMgr;  // our module
var obj = require('../TestUser/mochaObj.json').company;
var admin = require('../TestUser/mochaObj.json').admin;
var tob = require('../TestUser/mochaObj.json').tob;

  describe('Module company', function(){
    it('company is an object with a fucntion called Addcompany', function(){
      assert.equal(typeof company, 'object');
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
///////////////////////////////////////////////////////////////////////////////////////////////////
  describe('#AddCompany()',function(){
    it('Should inser without an error', function(done){
      company.AddCompany(obj["add_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetCompany()',function(){
    it('Should update without an error', function(done){
      company.GetCompany(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyNameAR()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyNameAR(obj["update_company_name"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyNameEN()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyNameEN(obj["update_company_name_en"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyLogo()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyLogo(obj["update_company_logo"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyLevel()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyLevel(obj["update_company_level"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyIdAdmin()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyIdAdmin(obj["update_company_admin"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyIdTop()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyIdTop(obj["update_company_tob"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteCompany()',function(){
    it('Should delete without an error', function(done){
      company.DeleteCompany(obj["delete_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      company.deleteTest(obj["delete_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
/////////////////////////////////////////////////////////////////////////////////////
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
