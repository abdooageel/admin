var express = require('express');
var session = require('express-session');
var i18n = require('i18n');
var path = require('path');
var passport = require('passport');
var expressValidator = require('express-validator'); 
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/admin_routes');
var company = require('./routes/company');
var address = require('./routes/address');
var measure = require('./routes/measure');
var typeBusiness = require('./routes/typeBusiness');
var stock = require('./routes/stock_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressValidator({
  customValidators: {
    isArray: function(value) {
      return value.match(/ain/g);
    }, 
    gte: function(param, num) {
      return param >= num;
    }
  }   
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'NagaDev',resave: true,saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
// init i18n module for this loop
app.use(i18n.init);
app.use('/',routes);
app.use('/company',company);
app.use('/address',address);
app.use('/measure',measure);
app.use('/stock',stock);
app.use('/typeBusiness',typeBusiness);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
