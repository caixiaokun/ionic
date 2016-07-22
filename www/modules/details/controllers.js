(function(angular){
  var app = angular.module('detalis.controllers', [
    'detalis.services'
  ]);
  app.controller('detalisController', function (
      $scope,
      $state
  ) {
    // 跳转到首页
    $scope.goBack=function(){
      // go 方法需要一个参数，是路由规则的名字
      // 最终会跳转到相应的路由中去
      $state.go('goodsList');
    }
  })
})(angular)
