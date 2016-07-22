(function(angular){
    'use strict';
    // 1.创建购物车路由模块
    var app = angular.module('cart.route',[
        'cart.controllers'
    ]);

    // 2.创建路由规则
    app.config(function($stateProvider){
        $stateProvider.state('cart',{
            url:'/cart',
            templateUrl:'./modules/cart/view.html',
            controller:'cartController'
        })
    })
})(angular)