var assert = require("assert"); // core module
var tobMgr = require('../app/tob').TobMgr;  // our module
var genre = require('../app/genre').GenreMgr;
var tob = require('../TestUser/mochaObj.json').tob;
var obj = require('../TestUser/mochaObj.json').genre;

  describe('Module genre', function(){
    it('genre is an object ', function(){
      assert.equal(typeof tobMgr, 'object');
      // assert.equal(typeof City.AddCity, 'function');
  }),
/////////////////////////////////////////////////////////////////////////////////
  describe('#AddTob()',function(){
    it('Should inser without an error', function(done){
      tobMgr.AddTob(tob['add_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
/////////////////////////////////////////////////////////////////////////////////

  describe('#AddGenre()',function(){
    it('Should inser without an error', function(done){
      genre.AddGenre(obj['add_genre'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetGenre()',function(){
    it('Should update without an error', function(done){
      genre.GetGenre(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateGenreNameAR()',function(){
    it('Should update without an error', function(done){
      genre.UpdateGenreNameAR(obj['update_genre_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateGenreNameEN()',function(){
    it('Should update without an error', function(done){
      genre.UpdateGenreNameEN(obj['update_genre_name_en'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateGenreIdTob()',function(){
    it('Should update without an error', function(done){
      genre.UpdateGenreIdTob(obj['update_genre_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteGenre()',function(){
    it('Should delete without an error', function(done){
      genre.DeleteGenre(obj['delete_genre'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      genre.deleteTest(obj['delete_genre'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
/////////////////////////////////////////////////////////////////////////////////

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      tobMgr.deleteTest(tob['delete_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
/////////////////////////////////////////////////////////////////////////////////

});
