(function(){
  var app = angular.module('store',[ ]);

  app.controller('StoreController', function(){
    this.products = prods;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(selectedTab){
      this.tab = selectedTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.detail = {};
    this.isInputing = function(){
      return !angular.equals(this.detail, {});
    }
    this.addReview = function(product){
      product.reviews.push(this.detail);
      this.detail = {};
    };
  });

  var prods = [
    {
      name: 'Samsung Galaxy Note 5',
      price: 729.99,
      description: 'Bigger has always been better. Galaxy Note proved that time and again. It also changed the entire game with S Pen. A versatile tool for ideas, goals and dreams. This time it\'s Galaxy Note5. The most powerful and beautiful version to date.',
      canPurchase: true,
      soldeOut: false,
      images: [
        {
          full: 'img/Note5_xl.jpg',
          thum: 'img/Note5_s.jpg'
        }
      ],
      reviews: []
    },
    {
      name: 'Samsung Galaxy S7',
      price: 699.99,
      description: 'It\'s not just a new phone. It brings a new way of thinking about what a phone can do. You defined the possibilities and we redefined the phone. The Galaxy S7 and S7 edge. Rethink what a phone can do.',
      canPurchase: true,
      soldeOut: false,
      images: [
        {
          full: 'img/s7_xl.jpg',
          thum: 'img/s7_s.jpg'
        }
      ],
      reviews: []
    },
    {
      name: 'Samsung Galaxy J7 Prime',
      price: 499,
      description: 'Enjoy photos, video and your favorite games on a 5.5” HD Super AMOLED screen 16GB of memory comes standard with the option to add an additional 128GB',
      canPurchase: true,
      soldeOut: false,
      images: [
        {
          full: 'img/j7Prime_xl.jpg',
          thum: 'img/j7Prime_s.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "so good",
          author: "rachane."
        }
      ]
    }
  ];
})();
