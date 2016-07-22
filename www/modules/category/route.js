(function (angular) {
    var app =angular.module('category.route',[
      'category.controllers']);
    app.config(function ($stateProvider) {
      $stateProvider.state('tab.category',{
        url:'/category',
        views:{
          'tab-category':{
            templateUrl:'./modules/category/view.html',
            controller:'categoryController'
          }
        }
      });
    })
})(angular)
