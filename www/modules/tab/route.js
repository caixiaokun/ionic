(function(angular){
    'use strict';
    // 1.创建tab的路由模块
    var  app = angular.module('tab.route',[]);

    // 2.配置路由规则
    app.config(function($stateProvider){
        // 第一个参数是路由规则的名字
        $stateProvider.state('tab',{  // 如果其他路由名是tab.xxx就是表示是该路由的子路由
            url:'/tab',
            abstract:true,//为true时这个规则不能够单独访问
            templateUrl:'./modules/tab/view.html'
        })
    })
})(angular)