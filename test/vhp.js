var assert = require("assert"); // core module
var VHPMgr = require('../app/vhp').VHPMgr;  // our module
var obj = require('../TestUser/mochaObj.json').vhp;

 describe('Module vhp', function(){
    it('vhp is an object ', function(){
      assert.equal(typeof VHPMgr, 'object');
  }),



    describe('#addVHP()',function(){
    it('Should insert without an error', function(done){
      VHPMgr.addVHP(obj['add_vendor'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#getAllVHP()',function(){
    it('Should select without an error', function(done){
      VHPMgr.getAllVHP(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  

  describe('#getVHPById()',function(){
    it('Should select without an error', function(done){
      VHPMgr.getVHPById(obj['add_vendor'].idvendor_has_prepaid,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),



  describe('#getSerialFromById()',function(){
    it('Should select without an error', function(done){
      VHPMgr.getSerialFromById(obj['add_vendor'].idvendor_has_prepaid,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),


   describe('#getSerialToById()',function(){
    it('Should select without an error', function(done){
      VHPMgr.getSerialToById(obj['add_vendor'].idvendor_has_prepaid,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),


   describe('#getquantityById()',function(){
    it('Should select without an error', function(done){
      VHPMgr.getquantityById(obj['add_vendor'].idvendor_has_prepaid,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

 describe('#getAmountById()',function(){
  it('Should select without an error', function(done){
    VHPMgr.getAmountById(obj['add_vendor'].idvendor_has_prepaid,function(err,result){
      if (err) throw err;
      done();
    });
  })
}),


  describe('#UpdateSerialFrom()',function(){
  it('Should select without an error', function(done){
    VHPMgr.UpdateSerialFrom(obj['update_name'],function(err,result){
      if (err) throw err;
      done();
    });
  })
}),


   describe('#UpdateSerialTo()',function(){
  it('Should select without an error', function(done){
    VHPMgr.UpdateSerialTo(obj['update_name'],function(err,result){
      if (err) throw err;
      done();
    });
  })
}),

 describe('#Updatequantity()',function(){
  it('Should select without an error', function(done){
    VHPMgr.Updatequantity(obj['update_name'],function(err,result){
      if (err) throw err;
      done();
    });
  })
}),

  describe('#UpdateAmount()',function(){
  it('Should select without an error', function(done){
    VHPMgr.UpdateAmount(obj['update_name'],function(err,result){
      if (err) throw err;
      done();
    });
  })
}),

 describe('#deleteVHP()',function(){
  it('Should select without an error', function(done){
    VHPMgr.deleteVHP(obj['update_name'].idvendor_has_prepaid,function(err,result){
      if (err) throw err;
      done();
    });
  })
}),










 describe('#deleteTest()',function(){
  it('Should delete without an error', function(done){
    VHPMgr.deleteTest(obj['add_vendor'].idvendor_has_prepaid,function(err,result){
      if (err) throw err;
      done();
    });
  })
})













});