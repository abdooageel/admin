var assert = require("assert"); // core module
var MeasureMgr = require('../app/measure').MeasureMgr;  // our module
var obj = require('../TestUser/mochaObj.json').measure;

  describe('Module Measure', function(){
    it('MeasureMgr is an object ', function(){
      assert.equal(typeof MeasureMgr, 'object');
  }),

  describe('#AddMeasure()',function(){
    it('Should inser without an error', function(done){
      MeasureMgr.AddMeasure(obj['add_measure'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetMeasurelimit()',function(){
    it('Should update without an error', function(done){
      MeasureMgr.GetMeasurelimit(0,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetMeasure()',function(){
    it('Should update without an error', function(done){
      MeasureMgr.GetMeasure(0,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#UpdateMeasureNameAR()',function(){
    it('Should update without an error', function(done){
      MeasureMgr.UpdateMeasureNameAR(obj['update_measure_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateMeasureNameEN()',function(){
    it('Should update without an error', function(done){
      MeasureMgr.UpdateMeasureNameEN(obj['update_measure_name_en'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteMeasure()',function(){
    it('Should delete without an error', function(done){
      MeasureMgr.DeleteMeasure(obj['delete_measure'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      MeasureMgr.deleteTest(obj['delete_measure'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })

});
