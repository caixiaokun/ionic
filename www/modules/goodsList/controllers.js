/*
 * @Author: huoqishi
 * @Date:   2016-07-10 16:03:05
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-10 17:32:17
 */

(function(angular) {
    'use strict';
    // 1.商品列表的控制器模块
    var app = angular.module('goodsList.controllers', [
        'goodsList.services'
    ]);
    //goodsListController
    // 2.创建商品列表控制器
    app.controller('goodsListController', function(
        $scope,
        $state,
        goodsListService) {

        // 第一次加载数据
        refreshGoodsList();


        // 得到服务里的promise对象
        function refreshGoodsList() {
            var promise = goodsListService.getDataList();
            promise.then(function(data) {
                // 可能里还有一些其他操作
                $scope.obj_goodsListData = data;
                $scope.newData=data;
                // console.log(data);
            });
        }

        // 刷新商品列表
        $scope.refreshGoodsList=function(){
           refreshGoodsList();
           // 广播，通知ionic去隐藏下拉刷新的标签
           $scope.$broadcast('scroll.refreshComplete');
        }

        // $scope.newData;
        // 上拉加载
        $scope.loadMoreGoodsList=function(){
           var newData= goodsListService.getMoreDataLise();
           $scope.obj_goodsListData = $scope.obj_goodsListData.concat(newData);
           $scope.$broadcast('scroll.infiniteScrollComplete');
        };
        $scope.Backcategory=function(){
            // go 方法需要一个参数，是路由规则的名字
            // 最终会跳转到相应的路由中去
            $state.go('tab.category');
        }
    })
})(angular)
