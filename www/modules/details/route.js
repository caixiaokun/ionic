/*
 * @Author: huoqishi
 * @Date:   2016-07-10 09:27:54
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-10 11:34:00
 */

(function(angular){
  'use strict';
  // 1.创建首页的路由模块
  var app = angular.module('detalis.route',[
    'detalis.controllers']);
  // 2.配置首页路由规则
  app.config(function($stateProvider){

    $stateProvider.state('details ',{
      url:'/details' ,
          templateUrl:'./modules/details/view.html',
          controller:'detalisController'

    })
  })
})(angular)
