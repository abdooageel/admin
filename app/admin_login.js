var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    easyPbkdf2 = require("easy-pbkdf2")(),
    adminMgr = require('../app/admin').AdminMgr;


//read the passport api docs if you wanna know what this does
passport.use(new LocalStrategy(
  function(username, password, done) {
    findAdminByEmail(username, function (err, admin) {
      if (err) { return done(err); }
      if (!admin) { return done(null, false); }
      authenticate(admin,password, function(valid){
        if(valid){
          return done(null, admin);
        } else {
          return done(null, false);
        }
      });
    });
  }
));
//read the passport api docs if you wanna know what this does
passport.serializeUser(function(admin, done) {
  done(null, admin.idadmin);
});
//read the passport api docs if you wanna know what this does
passport.deserializeUser(function(id, done) {
  findAdminById(id, function (err, admin) {
    done(err, admin);
  });
});

module.exports = function (router) {
  //login here we get the email and password and check if they're conrrect
  router.post('/loginAdmin', passport.authenticate('local', { failureRedirect: '/' }), function(req, res) {
    findAdminById(req.session.passport.user, function (err, admin) {
      req.session.email=admin.email;
      req.session.idadmin=admin.idadmin;
      req.session.level=admin.level;
      req.session.name=admin.name;
      // if(admin.level == 1){
        res.redirect('/adminPage');
      // }
    });
  });
  // here if an admin wants to logout of the app
  router.get('/logout',ensureAuthenticated, function(req, res) {
    req.session.destroy();
    res.redirect('/');
  });
  return router;
}

function findAdminById(id, fn) {
  adminMgr.GetadminById(id, function(err,admin){
    if(admin){
      fn(null, admin);
    } else {
      fn(new Error('admin ' + id + ' does not exist'));
    }
  });
}
function findAdminByEmail(email, fn) {
  adminMgr.getadminByEmail(email, function(err,admin){
    if(admin) {
      return fn(null, admin);
    } else {
      return fn(null, null);
    }
  });
}

function authenticate( admin, adminEnteredPassword, callback) {
  // make sure the admin-entered password is equal to the previously
  // created hash when hashed with the same salt.
  easyPbkdf2.verify( admin.salt, admin.password, adminEnteredPassword, function( err, valid ) {
    callback(valid);
  });
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}