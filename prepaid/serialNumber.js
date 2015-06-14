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
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var printMsg =function(){
  console.log("***************************************************");
  console.log("** 1- prepaid Card insertion                     **");
  console.log("** 2- prepaid Card info                          **");
  console.log("** 0 - Exit                                      **");
  console.log("***************************************************");
}
var count=1;
var Main = function(){
  printMsg();
  rl.question("Enter Your Choice : ", function(answer) {
    if(answer == 0 ){
      console.log("Good Bye");
      process.exit(code=0);
    } else if(answer ==1){
      rl.question("Enter Number Of prepaid Card that you want : ", function(number) {
        rl.question(" 20,50,100 dinars category : ", function(Type) {
          var flag=0;
          if(Type==20 || Type == 50 || Type == 100){ 
            loop(number,Type, function(plive,p){
            if(p.length == plive.length)
            {
            rand.saveRandomNumber(plive,function(result){
                console.log("Saved successfully");
               // process.exit(code=0);      
          });
            //console.log("************************");
             
             rand.saveRandomNumberr(p,function(result){
                console.log("Saved successfully");
                process.exit(code=0);      
          });   
          }    
              //process.exit(code=0);
               // saveRandomNumber(Type,random,all,number,function(result){
        // }); 
              
          // cb(true);
        });  
          }
          else
          {
            console.log("Error entry");
            process.exit(code=0);
          }
        });
      });
    } else if(answer==2){
      console.log("1-number of All prepaid Card");
      console.log("2-number of 20 prepaid Card");
      console.log("3-number of 50 prepaid Card");
      console.log("4-number of 100 prepaid Card");
      rl.question("Enter your choice : ", function(number) {
        if(number==1)
        {
          rand.NumberActiveprepaidCard(function(result){
           console.log("number All active prepaid Card is : "+result[0].c);
           process.exit(code=0);
         });
        } else if(number==2) {
          rand.ActiveprepaidCard(20,function(result){
            console.log("number 20 active prepaid Card is : "+result[0].c);
            process.exit(code=0);
          });
        } else if(number==3) {
          rand.ActiveprepaidCard(50,function(result){
            console.log("number 50 active prepaid Card is : "+result[0].c);
            process.exit(code=0);
          });
        } else if(number==4) {
          rand.ActiveprepaidCard(100,function(result){
            console.log("number 100 active prepaid Card is : "+result[0].c);
            process.exit(code=0);
          });            
        }
      });
    } else {
      console.log("You are entering incorrectly");
      process.exit(code=0);
    }
  });
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var flag=0,sumBatch=0,sumSerial=0,f=0;
var se;
var listOfObjects = [];
var listOfObjectss = [];
var plive=[];
var pre=[];

var loop = function(number,Type,cb)
{
  var c=0;
  var ff=0;
  
  function iterateElements(elements, index, callback) {
    rand.getLastNumber(function(result){
      if(result[0] == undefined && ff==0){
        ff=1;
        var random = getRandomInt(999999999999,9999999999999);
        var NumberOfCards =number;
        var amount=Type;
        var Batch = pad(1,3);
        var ty=0;
        if(Type==20){
          ty=1;
        } else if(Type==50){
          ty=2;
        } else if(Type==100){
          ty=3;
        }
        var serial =pad(1,8);
        var all =Batch.toString()+ty.toString()+serial.toString();
        rand.saveOneRow(random,md5(random),Type,all,Batch.toString(),function(result){
          console.log("Saved successfully");
          process.exit(code=0);  
        });
      } else if(ff==0) {
        var Batch =parseInt(result[0].serial_no.toString().slice(0,3));
        var random = getRandomInt(999999999999,9999999999999);
        if(flag==0){
          flag=1;
          sumBatch=Batch+1;
          sumBatch=pad(sumBatch,3);
        }
        var ty=0;
        if(Type==20){
          ty=1;
        } else if(Type==50){
          ty=2;
        } else if(Type==100){
          ty=3;
        }
        if(f==0){
          se =parseInt(result[0].serial_no.toString().slice(4,13));
          f=1;
        }
        se++;
        var serial=pad(se,8);
        var all =sumBatch.toString()+ty.toString()+serial.toString();
        pre.push([random,md5(random),all,Type,sumBatch.toString()]);
        plive.push([md5(random),all,Type,sumBatch.toString()]);
      }

      if (index == elements)
        return callback(plive,pre);
      iterateElements(elements, index+1, callback);
    });   
  }
  
  iterateElements(number, 1, function(res,ress) {
    cb(res,ress);
  });
}




function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

Main();



