var assert = require("assert"); // core module
var CompanyAddMgr = require('../app/company_address').CompanyAddressMgr;  // our module
var CompanyMgr = require('../app/company').CompanyMgr;  // our module
var adminMgr = require('../app/admin').AdminMgr;  // our module
var tobMgr = require('../app/tob').TobMgr;  // our module
var company = require('../TestUser/mochaObj.json').company;
var admin = require('../TestUser/mochaObj.json').admin;
var SchoolMgr = require('../app/school').SchoolMgr;
var tob = require('../TestUser/mochaObj.json').tob;
var obj = require('../TestUser/mochaObj.json').companyAddress;
var school = require('../TestUser/mochaObj.json').school;
  
  describe('Module company Address', function(){
    it('company is an object with a fucntion called Addcompany', function(){
      assert.equal(typeof CompanyAddMgr, 'object');
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
  describe('#AddSchool()',function(){
    it('Should inser without an error', function(done){
      SchoolMgr.AddSchool(school["add_school"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#AddCompanyAddress()',function(){
    it('Should inser without an error', function(done){
      CompanyAddMgr.AddCompanyAddress(obj["addaddress"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetCompanyAddress()',function(){
    it('Should update without an error', function(done){
      CompanyAddMgr.GetCompanyAddress(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyAddressLatit()',function(){
    it('Should update without an error', function(done){
      CompanyAddMgr.UpdateCompanyAddressLatit(obj["update_Address_latit"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyAddressLongit()',function(){
    it('Should update without an error', function(done){
      CompanyAddMgr.UpdateCompanyAddressLongit(obj["update_Address_longit"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyAddressDefault()',function(){
    it('Should update without an error', function(done){
      CompanyAddMgr.UpdateCompanyAddressDefault(obj["update_Address_default"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyAddressIdCompany()',function(){
    it('Should update without an error', function(done){
      CompanyAddMgr.UpdateCompanyAddressIdCompany(obj["update_Address_idcompany"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyAddresssIdSchool()',function(){
    it('Should update without an error', function(done){
      CompanyAddMgr.UpdateCompanyAddresssIdSchool(obj["update_Address_idschool"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteCompanyAddresss()',function(){
    it('Should delete without an error', function(done){
      CompanyAddMgr.DeleteCompanyAddresss(obj["delete_Address"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest() Address',function(){
    it('Should delete test without an error', function(done){
      CompanyAddMgr.deleteTest(obj["delete_Address"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  /////////////////////////////////////////////////////////////////////////////////////

  describe('#deleteTest() company',function(){
    it('Should delete test without an error', function(done){
      CompanyMgr.deleteTest(company["delete_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#deleteTest() admin',function(){
    it('Should delete test without an error', function(done){
      adminMgr.deleteTest(admin['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest() tob',function(){
    it('Should delete test without an error', function(done){
      tobMgr.deleteTest(tob['delete_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
//////////////////////////////////////////////////////////////////////////////

});
