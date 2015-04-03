'use strict';
angular.module('app.directives')
  .directive('headUnit',[function() {

    return {
      restrict: 'E',
      controller: 'HeadUnit',
      link: function(scope,element,attrs,headUnitCtrl){
        headUnitCtrl.init(element);
      },
      templateUrl:'/directives/sidebar/head-unit.html'
    };
  }]);
