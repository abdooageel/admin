var assert = require("assert"); // core module
var AreaMgr = require('../app/area').AreaMgr; 
var MahallaMgr = require('../app/mahalla').MahallaMgr; 
var  objArea = require('../TestUser/mochaObj.json').Area;
var  objMahalla = require('../TestUser/mochaObj.json').mahalla;
var City = require('../app/city').CityMgr; 
var  objCity = require('../TestUser/mochaObj.json').city;

  describe('Module Mahalla', function(){
    it('Mahalla is an object with a fucntions', function(){
      assert.equal(typeof MahallaMgr, 'object');
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

  describe('#addMahalla()',function(){
    it('Should insert without an error', function(done){
      MahallaMgr.addMahalla(objMahalla['add_mahalla'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getMahallaInfo()',function(){
    it('Should select area info without an error\n\tresult[0] should be an object', function(done){
      MahallaMgr.getMahallaInfo(function(err,result){    
        if (err) throw err;  
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    });
  }),

  describe('#getMahallaInfoByNameAr()',function(){
    it('Should select area info without an error\n\tresult[0] should be an object', function(done){
      MahallaMgr.getMahallaInfoByNameAr(objMahalla['add_mahalla'].name,function(err,result){    
        if (err) throw err;  
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    });
  }),

  describe('#getMahallaInfoByNameEn()',function(){
    it('Should select area info without an error\n\tresult[0] should be an object', function(done){
      MahallaMgr.getMahallaInfoByNameEn(objMahalla['add_mahalla'].name_en,function(err,result){    
        if (err) throw err;  
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    });
  }),

  describe('#getMahallaInfoByIdArea()',function(){
    it('Should select area info without an error\n\tresult[0] should be an object', function(done){
      MahallaMgr.getMahallaInfoByIdArea(objMahalla['add_mahalla'].area_idarea,function(err,result){    
        if (err) throw err;  
        assert.equal(typeof result[0], 'object'); 
        done();
      });
    });
  }),

  describe('#UpdateMahallaNameAR()',function(){
    it('Should Update area name arabic without an error', function(done){
      MahallaMgr.UpdateMahallaNameAR(objMahalla['update_name_ar'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#UpdateMahallaNameEN()',function(){
    it('Should Update area name arabic without an error', function(done){
      MahallaMgr.UpdateMahallaNameEN(objMahalla['update_name_en'],function(err,result){       
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteMahalla()',function(){
    it('Should delete without an error', function(done){
      MahallaMgr.DeleteMahalla(objMahalla['add_mahalla'].idmahalla,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

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
  
});