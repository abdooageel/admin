var assert = require("assert"); // core module
var tobMgr = require('../app/tob').TobMgr;  // our module
var obj = require('../TestUser/mochaObj.json').tob;

  describe('Module tob', function(){
    it('tob is an object ', function(){
      assert.equal(typeof tobMgr, 'object');
  }),

  describe('#AddTob()',function(){
    it('Should inser without an error', function(done){
      tobMgr.AddTob(obj['add_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetTob()',function(){
    it('Should update without an error', function(done){
      tobMgr.GetTob(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateTobNameAR()',function(){
    it('Should update without an error', function(done){
      tobMgr.UpdateTobNameAR(obj['update_tob_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateTobNameEN()',function(){
    it('Should update without an error', function(done){
      tobMgr.UpdateTobNameEN(obj['update_tob_name_en'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteTob()',function(){
    it('Should delete without an error', function(done){
      tobMgr.DeleteTob(obj['delete_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      tobMgr.deleteTest(obj['delete_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })

});
