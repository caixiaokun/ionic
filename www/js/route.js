(function(angular){
  'use strict';
  // 1.创建核心模块中的路由模块
  var app = angular.module('starter.route',[
    'detalis.route',
    'guidePage.route',
    'tab.route',
    'home.route',
    'category.route',
    'goodsList.route',
    'cart.route',
    'account.route',
  ]);

  // 2.配置主路由
  app.config(function($stateProvider,$urlRouterProvider){
    /// 不符合其他规则时，就跳转到指定路由，参数是路由的url中锚点值
    //$urlRouterProvider.otherwise('/tab/home');
    $urlRouterProvider.otherwise('/guidePage');
  })
})(angular)
