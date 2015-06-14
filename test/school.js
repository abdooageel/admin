var assert = require("assert"); // core module
var AreaMgr = require('../app/area').AreaMgr; 
var school = require('../app/school').SchoolMgr; 
var obj = require('../TestUser/mochaObj.json').school;
var MahallaMgr = require('../app/mahalla').MahallaMgr; 
var objArea = require('../TestUser/mochaObj.json').Area;
var objMahalla = require('../TestUser/mochaObj.json').mahalla;
var City = require('../app/city').CityMgr; 
var objCity = require('../TestUser/mochaObj.json').city;

  describe('Module School', function(){
    it('school is an object with a fucntions', function(){
      assert.equal(typeof school, 'object');
  }),
///////////////////////////////////////////////////////////////////////   
  describe('#AddCity()',function(){
    it('Should inser without an error', function(done){
      City.AddCity(objCity['add_city'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#addArea()',function(){
    it('Should insert without an error', function(done){
      AreaMgr.addArea(objArea['add_area'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#addMahalla()',function(){
    it('Should insert without an error', function(done){
      MahallaMgr.addMahalla(objMahalla['add_mahalla'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),
//////////////////////////////////////////////////////////////////////////
  describe('#AddSchool()',function(){
    it('Should insert without an error', function(done){
      school.AddSchool(obj['add_school'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetSchool()',function(){
    it('Should select area info without an error should be an object', function(done){
      school.GetSchool(function(err,result){    
        if (err) throw err;  
        done();
      });
    });
  }),

  describe('#UpdateSchoolNameAR()',function(){
    it('Should Update area name arabic without an error', function(done){
      school.UpdateSchoolNameAR(obj['update_school_name'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#UpdateSchoolNameEN()',function(){
    it('Should Update area name arabic without an error', function(done){
      school.UpdateSchoolNameEN(obj['update_school_name_en'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateSchoolLatit()',function(){
    it('Should Update area name arabic without an error', function(done){
      school.UpdateSchoolLatit(obj['update_school_latit'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateSchoolLongit()',function(){
    it('Should Update area name arabic without an error', function(done){
      school.UpdateSchoolLongit(obj['update_school_longit'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateSchoolIdMahalla()',function(){
    it('Should Update area name arabic without an error', function(done){
      school.UpdateSchoolIdMahalla(obj['update_school_mahalla'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteSchool()',function(){
    it('Should delete without an error', function(done){
      school.DeleteSchool(obj['delete_school'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      school.deleteTest(obj['delete_school'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
////////////////////////////////////////////////////////////////////////
  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      MahallaMgr.deleteTest(objMahalla['add_mahalla'].idmahalla,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      AreaMgr.deleteTest(objArea['delete_area'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      City.deleteTest(objCity['delete_city'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
//////////////////////////////////////////////////////////////////////////////
});