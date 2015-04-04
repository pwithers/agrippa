'use strict';
angular.module('app.directives')
  .directive('headUnit',[function() {

    return {
      restrict: 'E',
      controller: 'HeadUnit',
      templateUrl:'/directives/sidebar/head-unit.html'
    };
  }]);
