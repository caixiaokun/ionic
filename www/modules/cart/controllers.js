/*
 * @Author: huoqishi
 * @Date:   2016-07-08 09:43:48
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-08 16:35:15
 */

(function(angular) {
    'use strict';
    // 1.��������ҳ�Ŀ�����ģ��
    var app = angular.module('cart.controllers', [
        'cart.services'
    ])
    // 2.�������ﳵ������
    app.controller('cartController',function(
        $scope,
        $state
    )
    {
        // ��ת����ҳ
        $scope.goBack=function(){
            // go ������Ҫһ����������·�ɹ��������
            // ���ջ���ת����Ӧ��·����ȥ
            $state.go('tab.home');
        }
    });
})(angular)
