/*
 * @Author: huoqishi
 * @Date:   2016-07-10 09:33:07
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-10 11:57:52
 */

(function(angular) {
    'use strict';
    // 1.创建首页控制器模块
    var app = angular.module('home.controllers', [
        'home.services'
    ]);
    //homeController

    // 2.创建首页控制器
    app.controller('homeController', function(
      $scope,
      $interval// 这个是对setinterval的封装
      ) {
      // 限时秒杀
        timedSecKill();
        // $scope.$on，监听ionic通知的事件
        // $ionicView.enter表示<ion-view>已经插入到页面
        // ion-view的生命周期
        // $ionicView.beforeEnter // 进入之前
        // $ionicView.enter// 进入之时
        // $ionicView.afterEnter //  进入之后
        // $ionicView.beforeLeave// 离开之前
        // $ionicView.leave// 离开之时
        // $ionicView.afterLeave

        $scope.$on('$ionicView.enter', function() {
            // 初始化顶部轮播图
            headerSlide();
            // 初始京东头条轮播图
            jdHeaderSlide();

            // 顶部颜色渐变
            topColorChange();

            // 显示滚动到顶部的按钮
            goTop();
        })

        // 功能1,头部轮播图
        // 初始化swiper
        function headerSlide() {
            var headerSwiper = new Swiper('#headerSlider', {
                autoplay: 1000,
                pagination:'.swiper-pagination',
                loop:true,
                autoplayDisableOnInteraction:false
            });
        }
        // 头部轮播图数据
        $scope.headerSlideData = [{
            alt: "双十一预热主场会",
            src: "img/home/home-headerSlide-1.jpg"
        }, {
            alt: "11月11天家电低价不停歇",
            src: "img/home/home-headerSlide-2.jpg"
        }, {
            alt: "家具盛典 好货提前抢",
            src: "img/home/home-headerSlide-3.jpg"
        }, {
            alt: "IT抢券节",
            src: "img/home/home-headerSlide-4.jpg"
        }, {
            alt: "潮流数码 双11爽购攻略",
            src: "img/home/home-headerSlide-5.jpg"
        }];

        // 功能2.京东头条轮播图
        function jdHeaderSlide(){
          new Swiper('#toutiaoSlider',{
            autoplay:800,
            direction:'vertical',// 垂直轮播
            loop:true,

          })
        }

        // 功能3：限时秒杀
        function timedSecKill(){

          // 1.表示剩余时间
           var timeLeft = {h:1,m:30,s:10};

          // 2.setInterval,每一秒值减1
          // 1:0:0  0:59:59
          // $interval,这个是angular对setInterval的封装,参数相同
          var interval =  $interval(function(){
             if(timeLeft.s>0){   // 1:59:0 1:59:-1
               timeLeft.s--;
             }else if(timeLeft.m>0){ // 1:59:0   1:58:59
               timeLeft.m--;
               timeLeft.s=59;
             }else if(timeLeft.h>0){
                timeLeft.h--;
                timeLeft.m=59;
                timeLeft.s=59;
             }
             // console.log(timeLeft);
             // 3.$scope.hour=timeLeft.h;
             // 要处理时间是1位数或2位的情况
             // getTime(timeLeft.h)
             // 小时数
             $scope.hour={
                A:getTime().A(timeLeft.h),
                B:getTime().B(timeLeft.h)
             }
             // 分钟数
             $scope.minute={
              A:getTime().A(timeLeft.m),
              B:getTime().B(timeLeft.m)
             }
             // 秒数
             $scope.second={
              A:getTime().A(timeLeft.s),
              B:getTime().B(timeLeft.s)
             }
          },1000)

          // time  // 0-59,
          // 这个方法是得到时间的个位和10位数
          function getTime(time){
              return {
                // A方法表示得到10位数据
                // 一种是大于10的数据： 18/10 =1.8
                A:function(time){
                  if(time>=10){
                    return parseInt(time/10);//得到的是小数的整数部分，不会四舍五入.
                  }else{ // 8
                     return 0;
                  }
                },
                // B方法表示得到个位数
                B:function(time){
                  if(time>=10){  // 18
                    return time%10; // 通过求余得到个位数
                  }else{
                    return time; // 8
                  }
                }
              }
          }
        }

        // 功能4：顶部颜色渐变
        function topColorChange(){
          // 注册滚动事件
         var content = document.getElementById('home-content');
         var headBar = document.getElementById('headerBar-bg');
         var nowOpacity = 0;
         content.onscroll=function(){
           // this.scrollTop 得到滚动条的高度
           // 500 nowOpacity 1
           nowOpacity = this.scrollTop/500;// 根据页面滚动的高度得到透明度
           headBar.style.opacity=nowOpacity;
         }
        }

        // 功能5：回到顶部功能
        function goTop(){
           // 注册滚动
           var content = document.getElementById('home-content');
           var goTop = document.querySelector('.back_top');

           // 这里不要再用=了
           content.addEventListener('scroll',function(){

              if(this.scrollTop>=250){
                  goTop.style.display='block';
                  goTop.style.opacity=1;
              }else{
                goTop.style.display='none';
              }
           });

          // 注册点击事件，滚动到顶部。
           goTop.onclick=function(){
             content.scrollTop=0;
             //content.animation({});
           }
        }
    })
})(angular)
