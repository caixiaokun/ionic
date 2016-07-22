(function(angular){
    'use strict';
    // 1.�������ﳵ·��ģ��
    var app = angular.module('account.route',[
        'account.controllers'
    ]);

    // 2.����·�ɹ���
    app.config(function($stateProvider){
        $stateProvider.state('tab.account',{
            url:'/account',
            views:{
                'tab-account':{
                    templateUrl:'./modules/account/view.html',
                    controller:'accountController'
                }
            }
        })
    })
})(angular)