(function(angular){
    'use strict';
    // 1.�������ﳵ·��ģ��
    var app = angular.module('cart.route',[
        'cart.controllers'
    ]);

    // 2.����·�ɹ���
    app.config(function($stateProvider){
        $stateProvider.state('cart',{
            url:'/cart',
            templateUrl:'./modules/cart/view.html',
            controller:'cartController'
        })
    })
})(angular)