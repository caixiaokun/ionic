(function (angular) {
  'use strict';
  // 1.创建核心模块中的angular全局变量模块
  var app=angular.module('starter.global',[]);
  // 2.创建这个angular全局对象
  app.constant('GlobalVariable',{
    SERVER_PATH:'http://www.caixiaokun.com',
  })
})(angular)
