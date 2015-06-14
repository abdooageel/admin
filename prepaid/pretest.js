var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user_app').userMgr;
var should = require('should');
var  supertest=require('supertest');
var test =require('./testjson');
var rand= require('../app/serialnumber').rand;
var md5 = require('MD5');
var Step = require('step');
var rand= require('../app/serialnumber').rand;

  var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
var main =function(){
rand.getLastNumber(function(result){
	//console.log(result[0].serial_no);
	if(result[0]==undefined){
		var Batch=pad(1,3);
        var type=1;
        var incremnt=pad(1,8);
         //console.log(Batch+type+incremnt);

	} else {
		var serial = result[0].serial_no;
		console.log(serial);

	}


}) ;


}

main();