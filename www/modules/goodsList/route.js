/*
* @Author: huoqishi
* @Date:   2016-07-10 15:57:32
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-10 16:07:34
*/

(function(angular){
  'use strict';
  // 1.商品列表页面路由模块
  var app = angular.module('goodsList.route',[
    'goodsList.controllers']);

  // 2.配置商品列表路由配置
  app.config(function($stateProvider){

     $stateProvider.state('goodsList',{// 这里就不作为tab的子路由了
        url:'/goodsList/:typeNumber',
        templateUrl:'./modules/goodsList/view.html',
        controller:'goodsListController'

     })
  })
})(angular)