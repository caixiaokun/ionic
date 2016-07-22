/*
 * @Author: huoqishi
 * @Date:   2016-07-08 09:43:48
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-08 16:35:15
 */

(function(angular) {
    'use strict';
    // 1.创建引导页的控制器模块
    var app = angular.module('cart.controllers', [
        'cart.services'
    ])
    // 2.创建购物车控制器
    app.controller('cartController',function(
        $scope,
        $state
    )
    {
        // 跳转到首页
        $scope.goBack=function(){
            // go 方法需要一个参数，是路由规则的名字
            // 最终会跳转到相应的路由中去
            $state.go('tab.home');
        }
    });
})(angular)
