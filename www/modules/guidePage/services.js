/*
* @Author: huoqishi
* @Date:   2016-07-08 09:49:02
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-08 09:51:00
*/

(function(angular){
  'use strict';
  // 1.引导页的服务模块
  var app  = angular.module('guidePage.services',[]);

  // 2.创建服务
  // app.service
  app.factory('guidePageService',function(){
    return {
      sayHello:function(){
        console.log('小明');
      }
    }
  })
})(angular)