(function(){
  var app = angular.module('store',[ ]);

  app.controller('StoreCtrl', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Ruby',
    price: 30.99,
    description: 'Ruby is a valuable gem. Buy it...'
  };
})();
