var assert = require("assert"); // core module
var City = require('../app/city').CityMgr;  // our module
var obj = require('../TestUser/mochaObj.json').city;

  describe('Module City', function(){
    it('city is an object with a fucntion called AddCity', function(){
      assert.equal(typeof City, 'object');
  }),

  describe('#AddCity()',function(){
    it('Should inser without an error', function(done){
      City.AddCity(obj['add_city'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getCities()',function(){
    it('Should update without an error', function(done){
      City.GetCity(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCityNameAR()',function(){
    it('Should update without an error', function(done){
      City.UpdateCityNameAR(obj['update_city_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCityNameEN()',function(){
    it('Should update without an error', function(done){
      City.UpdateCityNameEN(obj['update_city_name_en'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteCity()',function(){
    it('Should delete without an error', function(done){
      City.DeleteCity(obj['delete_city'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      City.deleteTest(obj['delete_city'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })

});
