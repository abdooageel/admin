var assert = require("assert"); // core module
var AreaMgr = require('../app/area').AreaMgr;
var City = require('../app/city').CityMgr; 
var  objArea = require('../TestUser/mochaObj.json').Area;
var  objCity = require('../TestUser/mochaObj.json').city;

  describe('Module Area', function(){
    it('Area is an object with a fucntions', function(){
      assert.equal(typeof AreaMgr, 'object');
  }),

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

  describe('#getAreaInfo()',function(){
    it('Should select area info without an error\n\tresult[0] should be an object', function(done){
      AreaMgr.getAreaInfo(function(err,result){    
        if (err) throw err;  
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    });
  }),
 
  describe('#getAreaInfoById()',function(){
    it('Should select area info by id without an error\n\tresult[0] should be an object', function(done){
      AreaMgr.getAreaInfoById(objArea['add_area'].idarea,function(err,result){
        if (err) throw err;
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    })
  }),

  describe('#getAreaInfoByName()',function(){
    it('SShould select area Name without an error\n\tresult[0] should be an object', function(done){
      AreaMgr.getAreaInfoByName(objArea['add_area'].name,function(err,result){        
        if (err) throw err;
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    })
  }),

  describe('#getAreaInfoByNameEn()',function(){
    it('Should select area name_en without an error\n\tresult[0] should be an object', function(done){
      AreaMgr.getAreaInfoByNameEn(objArea['Name_en'].name_en,function(err,result){       
        if (err) throw err;
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    })
  }),

  describe('#UpdateAreaNameAR()',function(){
    it('Should Update area name arabic without an error', function(done){
      AreaMgr.UpdateAreaNameAR(objArea['update_name_ar'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateAreaNameEn',function(){
    it('Should Update area name_en without an error', function(done){
      AreaMgr.UpdateAreaNameEn(objArea['update_name_en'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteArea()',function(){
    it('Should delete without an error', function(done){
      AreaMgr.DeleteArea(objArea['delete_area'],function(err,result){
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
  
});