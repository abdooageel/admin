var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user').userMgr;
var should = require('should');
var  supertest=require('supertest');
var test =require('./testjson');


	userMgr.checkEmailSeller(test.email, function(results){
 		console.log(results);
 	});


	userMgr.getFirstNameById(test.idcustomer, function(results){
 		console.log(results);
 	});

  	userMgr.getLastNameById(test.idcustomer, function(results){
  		console.log(results);
 	});

 	userMgr.getEmailById (test.idcustomer, function(results){
 		console.log("// get Email By Id ");
  		console.log(results);
 	});

 	userMgr.getStatusById (test.idcustomer, function(results){
 		console.log("// get status By id ");
  		console.log(results);
 	});

 	userMgr.getLevelById (test.idcustomer, function(results){
 		console.log("// get level By Id ");
  		console.log(results);
 	});

 	userMgr.getAllById(test.idcustomer, function(results){
 		console.log("// geta ll by Id ");
  		console.log(results);
 	});

    





module.exports = router;
