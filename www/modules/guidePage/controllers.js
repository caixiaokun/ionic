/*
 * @Author: huoqishi
 * @Date:   2016-07-08 09:43:48
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-08 16:35:15
 */

(function(angular) {
    'use strict';
    // 1.创建引导页的控制器模块
    var app = angular.module('guidePage.controllers', [
        'guidePage.services'
    ])

    // 2.创建控制器
    app.controller('guidePageController', function(
        $scope,
        $state
    ) {
        var mySwiper = new Swiper('#guideSlide', {
            // autoplay: 5000, //可选选项，自动滑动
            onSlideChangeEnd: function(swiper) {
                // alert('事件触发了;');
                console.log(swiper);
                var activeIndex = swiper.activeIndex;
                var slide= document.getElementById('tips-'+(activeIndex+1));
                //console.log(slide);
                // 移除hidden样式让文字显示，添加guide-show样式让文字有动画.
                angular.element(slide).removeClass('hidden').addClass('guide-show');
            }
        });
        $scope.goHome=function(){
            //介绍结束，点击进入主页
            $state.go('tab.home')
        }
    });
})(angular)
