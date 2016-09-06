'use strict';

module.exports = function(Coffeeshop) {
  Coffeeshop.getShopName = function(shopId, cb){
    Coffeeshop.findById(shopId, function( err, instance) {
      var response;
      response = 'THE Name of the coffee shop is ...' + instance.name;
      cb(null, response);
      console.log('frog ', response);
    });
  };

  Coffeeshop.remoteMethod(
    'getShopName',
    {
      http: {path : '/getShopName', verb : 'get'},
      accepts : {arg : 'id', type : 'number', http : {source : 'query'} },
      returns : {arg : 'name', type : 'string'}
    }
  );
};
