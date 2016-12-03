(function(){
  var app = angular.module('store-directive',[ ]);

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/product-title.html'
    };
  });

  app.directive('productImage', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/product-image.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/product-panels.html',
      controller: function(){
        this.tab = 1;
        this.selectTab = function(selectedTab){
          this.tab = selectedTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.directive('reviewForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/review-form.html',
      controller: function(){
        this.detail = {};
        this.isInputing = function(){
          return !angular.equals(this.detail, {});
        }
        this.addReview = function(product){
          product.reviews.push(this.detail);
          this.detail = {};
        };
      },
      controllerAs: 'review'
    };
  });
  
})();
