// config the uploader
var fs = require('fs');
  if (!fs.existsSync(__dirname +'/../public/uploaded')){
    fs.mkdirSync(__dirname + '/../public/uploaded');
  }
  if (!fs.existsSync(__dirname +'/../public/uploaded/tmp')){
    fs.mkdirSync(__dirname + '/../public/uploaded/tmp');
  }
  if (!fs.existsSync(__dirname +'/../public/uploaded/files')){
    fs.mkdirSync(__dirname + '/../public/uploaded/files');
  }
var options = {
  tmpDir:  __dirname + '/../public/uploaded/tmp',
  publicDir: __dirname + '/../public/uploaded',
  uploadDir: __dirname + '/../public/uploaded/files',
  uploadUrl:  '/uploaded/files/',
  maxPostSize: 11000000000, // 11 GB
  minFileSize:  1,
  maxFileSize:  10000000000, // 10 GB
  acceptFileTypes:  /.+/i,
  // Files not matched by this regular expression force a download dialog,
  // to prevent executing any scripts in the context of the service domain:
  inlineFileTypes:  /\.(gif|jpe?g|png)$/i,
  imageTypes:  /\.(gif|jpe?g|png)$/i,
  copyImgAsThumb : true, // required
  imageVersions: {
    thumbnail: {
        width: 80,
        height: 80
    }
  },
  accessControl: {
    allowOrigin: '*',
    allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
    allowHeaders: 'Content-Type, Content-Range, Content-Disposition'
  },
  nodeStatic: {
    cache:  3600 // seconds to cache served files
  }
};

    //var uploader = require('blueimp-file-upload-expressjs')(options);
function setDir(iduser,it){
  if (!fs.existsSync(__dirname +'/../public/uploaded/files/'+iduser)){
    fs.mkdirSync(__dirname + '/../public/uploaded/files/'+iduser);
  }
  if (!fs.existsSync(__dirname +'/../public/uploaded/tmp/'+iduser)){
    fs.mkdirSync(__dirname + '/../public/uploaded/tmp/'+iduser);
  }
  if (!fs.existsSync(__dirname +'/../public/uploaded/files/'+iduser+'/'+it)){
    fs.mkdirSync(__dirname + '/../public/uploaded/files/'+iduser+'/'+it);
  }
  if (!fs.existsSync(__dirname +'/../public/uploaded/tmp/'+iduser+'/'+it)){
    fs.mkdirSync(__dirname + '/../public/uploaded/tmp/'+iduser+'/'+it);
  }
  options.tmpDir=  __dirname + '/../public/uploaded/tmp/'+iduser+'/'+it;
  options.publicDir= __dirname + '/../public/uploaded/'+iduser+'/'+it;
  options.uploadDir= __dirname + '/../public/uploaded/files/'+iduser+'/'+it;
  options.uploadUrl=  '/uploaded/files/'+iduser+'/'+it+'/';
  return options;
}

    module.exports = function (router) {
      // router.get('/upload', function(req, res) {
      //   options=setDir(1,2);
      //   var uploader = require('blueimp-file-upload-expressjs')(options);
      //   uploader.get(req, res, function (obj) {
      //     res.send(JSON.stringify(obj)); 
      //   });
      // });

      router.post('/upload', function(req, res) {
        options=setDir(1,2);
        var uploader = require('blueimp-file-upload-expressjs')(options);
        uploader.get(req, res, function (obj) {
          res.send(JSON.stringify(obj)); 
        });
      });

      router.post('/upload', function(req, res) {
        options=setDir(3,300);
        var uploader = require('blueimp-file-upload-expressjs')(options);
        uploader.post(req, res, function (obj) {
          res.send(JSON.stringify(obj)); 
        });

      });

      router.delete('/uploaded/files/:iduser/:IT/:name', function(req, res) {
        options=setDir(3,300);
        var uploader = require('blueimp-file-upload-expressjs')(options);
        uploader.delete(req, res, function (obj) {
          res.send(JSON.stringify(obj)); 
        });

      });
      return router;
    }