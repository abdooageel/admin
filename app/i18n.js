var i18n = require('i18n');

module.exports = {

  setlang: function (req, res) {
    if(!req.cookies.locale)
      req.cookies.locale ="ar";
    i18n.setLocale(req.cookies.locale);
    res.cookie('locale', req.cookies.locale);
  },

  setdeflan: function (req,res) {
    i18n.setLocale(req.params.locale);
    req.session.language = req.params.locale;
    res.cookie('locale', req.params.locale);
  }


};