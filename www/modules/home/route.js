/*
* @Author: huoqishi
* @Date:   2016-07-10 09:27:54
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-10 11:34:00
*/

(function(angular){
  'use strict';
  // 1.创建首页的路由模块
  var app = angular.module('home.route',[
    'home.controllers']);

  // 2.配置首页路由规则
  app.config(function($stateProvider){
    // tab.home表示当前路由是tab路由的子路由，它们必需同时出现
    $stateProvider.state('tab.home',{
      url:'/home' ,// 不是指定/tab/home,只不过在访问时是使用#/tab/home
      views:{
        'tab-home':{
          templateUrl:'./modules/home/view.html',
          controller:'homeController'
        }
      }
    })
  })
})(angular)