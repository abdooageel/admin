var assert = require("assert"); // core module
var color = require('../app/color').ColorMgr;  // our module
var obj = require('../TestUser/mochaObj.json').color;

  describe('Module color', function(){
    it('color is an object with a fucntion called Addcolor', function(){
      assert.equal(typeof color, 'object');
  }),

  describe('#Addcolor()',function(){
    it('Should inser without an error', function(done){
      color.AddColor(obj['add_color'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetColor()',function(){
    it('Should update without an error', function(done){
      color.GetColor(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateColorNameAR()',function(){
    it('Should update without an error', function(done){
      color.UpdateColorNameAR(obj['update_color_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateColorNameEN()',function(){
    it('Should update without an error', function(done){
      color.UpdateColorNameEN(obj['update_color_name_en'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteColor()',function(){
    it('Should delete without an error', function(done){
      color.DeleteColor(obj['delete_color'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      color.deleteTest(obj['delete_color'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })

});
