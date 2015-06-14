

module.exports = {
  isCity : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  }, 

  isAreas : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  }, 

  isMahala : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  },
  
  isCompany : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  },

  isSchool : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    isName(req,'latit',' latit required');
    isName(req,'longit',' longit required');
    isName(req,'mahalla_idmahalla',' mahalla required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  },

  isAddres : function (req,cb) {
    isName(req,'latit',' latit required');           //Validate name
    isName(req,'longit',' longit required');
    isName(req,'default',' default required');
    isName(req,'idschool',' idschool required');
    isName(req,'address_desc',' address_desc required');
    isName(req,'mahalla',' mahalla required');
    isName(req,'city_idcity',' city_idcity required');
    isName(req,'area',' area required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  },

  isSize : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  },

  isTob : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  },  
};





function  isEmail (req,name,msg) {
  return req.assert(name, msg).isEmail();  //Validate email
}

function  isName (req,name,msg) {
  return req.assert(name, msg).notEmpty();  //Validate email
}