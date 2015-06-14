mailer = require('../app/mailer');


var obj = {
  template : "activate_seller",
  subject : "Naga account activation",
  locals : {
    email : "abdullah.el_ameer@gmail.com",
    user : {
      name : "Ahmed Fituri",
      link : "http://naga.ly/activate/SDFSDKLJHDFSSLDKF23424N234L234H234"
    }
  }
}


describe('#SendActivationMail()',function(){
  it('Should send an email without an error', function(done){

    mailer.send(obj,function(err){
      if (err) throw err;
      done();
    });
  });
})