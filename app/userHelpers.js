var easyPbkdf2 = require("easy-pbkdf2")(),
    adminMgr= require("../app/admin").AdminMgr,
    itemCoreMgr= require("../app/item_core").itemCoreMgr,
    ItemMgr= require("../app/item").ItemMgr,
    itemSizeMgr= require("../app/item_has_size").itemSizeMgr,
    url=require('url');

module.exports = {
  /* here we add a new user to the system */
  addAdmin: function (body, cb) {
    var salt = easyPbkdf2.generateSalt(); //we generate a new salt for every new user
    easyPbkdf2.secureHash( body.password, salt, function( err, passwordHash, originalSalt ) {
      var obj={
            name : body.name,
            email : body.email,
            password : passwordHash,
            salt : originalSalt,
            level : body.level
          }
      adminMgr.AddAdmin(obj, function(result){
        cb(result);  
      });
    });
  },

  addItem: function (body,cb) {
    var core_obj={
      name : body.name,
      name_en : body.name_en,
      company_idcompany : body.company_idcompany,
      tog_idtog : body.tog_idtog,
      genre_idgenre : body.genre_idgenre,
      tob_idtob : body.tob_idtob,
      item_desc : body.item_desc,
      brand_idbrand : body.brand_idbrand,
      admin_idadmin : body.admin_idadmin
    }
    itemCoreMgr.addItemCore(core_obj,function(err,result){
      var item_obj={
        price : body.price,
        discount : body.discount,
        discount_exp : body.discount_exp,
        color_idcolor : body.color_idcolor,
        quantity : body.quantity,
        item_core_iditem_core : result.insertId,
        unix_date : body.unix_date,
        stock_idstock : body.stock_idstock,
        admin_idadmin : body.admin_idadmin
      }
      ItemMgr.AddItem(item_obj,function(err,resultitem){
        for (var i=0;i<body.size_idsize.length;i++) {
          if (body.size_idsize[i] != 0 || body.size_idsize[i] != null){ 
            var item_has_size={
              item_iditem : resultitem.insertId,
              size_idsize : body.size_idsize[i],
              measure_idmeasure : body.measure_idmeasure,
              quantity : body.quantityc[i]
            }
            itemSizeMgr.addItemSize(item_has_size,function(err,resultSize){
              cb(resultSize);
            });
          }
        }


      });
    });
  },
  /* here we check if the user have root access */
  isRoot : function (req,res,next) {
    if (req.isAuthenticated() && req.session.level<=0) { return next(); }
    if(req.isAuthenticated() && req.session.level== 1){res.redirect('/cpanel/cpanelAdmin') }
    if(req.isAuthenticated() && req.session.level== 2){res.redirect('/office/'+req.session.office_idoffice) }
    res.redirect('/users/login')
  },
  /* here we check if the user have admin or higher access */
  isAdmin : function (req,res,next) {
    if (req.isAuthenticated() && req.session.level==1) { return next(); }
    res.redirect('/')
  },
   /* here we check if the manager have access to office */
  isManager : function (req,res,next) {
    if (req.isAuthenticated() && req.session.level<2) { return next(); }
    if(req.isAuthenticated() && req.session.level==2 && req.params.oid==req.session.office_idoffice){ return next(); }
    if(!req.isAuthenticated()){res.redirect('/users/login')}
    res.redirect('/office/'+ req.session.office_idoffice)
  },
   /* here we check if the manager have access to office */
  isAcsees : function (req,res,next) {
    if (req.isAuthenticated() && req.session.level<2 ) { return next(); }
    if (req.isAuthenticated() && req.session.level==2 ){
      centerMgr.getidOffis(req.params.id,function(result){
        if(result[0].office_idoffice == req.session.office_idoffice){ return next(); }
          res.redirect('/office/'+ req.session.office_idoffice);
      });
    }
    if (!req.isAuthenticated()){
     res.redirect('/users/login')
    }
  },
  /* here we check user if login */
  isAdminLogin : function (req,res,next) {
    if (!req.isAuthenticated()) { return next(); }
    res.redirect('/adminPage');
  },
  getPage : function (req){
    var page = 1;
    if(url.parse(req.url, true).query.p){
      page = parseInt(url.parse(req.url, true).query.p);
    }
    return page;
  },
  getLimit : function (page){
    var limit =0;
    if (page > 1)
      limit = page * 10 - 10;
    return limit;
  },
  getPageCount : function(count){
    return Math.ceil(count/10);
  },

  paginate : function(page,pageCount){
    var pagination={}, pages = [], next={}, previous={};
    var i = 0, limit = 10, ret ='';
    //listing pages
    page =Number(page);
    pageCount= Number(pageCount);
    var leftCount = Math.ceil(limit / 2) - 1;
    var rightCount = limit - leftCount - 1;
    if (page + rightCount > pageCount)
      leftCount = limit - (pageCount - page) - 1;
    if (page - leftCount < 1)
      leftCount = page - 1;
    var start = page - leftCount;
    while (i < limit && i < pageCount) {
      newContext = { n: start };
      if (start === page) newContext.active = "active ";
      pages.push(newContext);
      start++;
      i++;
    }
    //defining next
    if (page === 1) {
      previous = { disabled: "disabled", n: 1 }
    }
    else {
      previous = { n: page - 1 }
    }
    //defining next
    newContext = {};
    if (page === pageCount) {
      next = { disabled: "disabled", n: pageCount }
    }
    else {
      next = { n: page + 1 }
    }
    pagination = {pages : pages, next : next, previous : previous};
    return pagination;
  }
};
