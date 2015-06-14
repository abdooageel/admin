var path           = require('path')
  , templatesDir   = path.resolve(__dirname, '../views/', 'templates')
  , emailTemplates = require('email-templates')
  , nodemailer     = require('nodemailer')
  , config         = require('../config.json');
exports.mailMgr = {

  send : function (obj,cb){
    emailTemplates(templatesDir, function(err, template) {
      if (err) {
        console.log(err);
      } else {

        // Prepare nodemailer transport object
        var transport = nodemailer.createTransport("SMTP",{
          host: 'naga.ly',
          port: 25,
          auth: {
            user: "noreply@naga.ly",
            pass: config.epassword
          }
        });

        // Send a single email
        template(obj.template, obj.locals, function(err, html, text) {
          if (err) {
            console.log(err);
          } else {
            transport.sendMail({
              from: 'Naga <noreply@naga.ly',
              to: obj.locals.email,
              subject: obj.subject,
              html: html,
              generateTextFromHTML: true,
              text: text
            }, function(err, responseStatus) {
              if (err) {
                console.log(err);
                return true;
              } else {
                // console.log(responseStatus.message);
                return false;
              }
            });
          }
        });

      }
    });
  }
}