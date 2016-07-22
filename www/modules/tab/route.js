(function(angular){
    'use strict';
    // 1.����tab��·��ģ��
    var  app = angular.module('tab.route',[]);

    // 2.����·�ɹ���
    app.config(function($stateProvider){
        // ��һ��������·�ɹ��������
        $stateProvider.state('tab',{  // �������·������tab.xxx���Ǳ�ʾ�Ǹ�·�ɵ���·��
            url:'/tab',
            abstract:true,//Ϊtrueʱ��������ܹ���������
            templateUrl:'./modules/tab/view.html'
        })
    })
})(angular)