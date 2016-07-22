/*
* @Author: huoqishi
* @Date:   2016-07-08 09:36:24
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-08 10:11:36
*/

(function(angular){
  'use strict';
  // 1.引导页的路由模块
  var app = angular.module('guidePage.route',[
      'guidePage.controllers'
    ]);

  // 2.配置路由规则
  app.config(function($stateProvider){
    // 第一个参数是名字
    $stateProvider.state('guidePage',{
      url:'/guidePage',
      // 模块文件的路径是从app.js父级开始算
      templateUrl:'./modules/guidePage/view.html',
      controller:'guidePageController'
    })
  })
})(angular)