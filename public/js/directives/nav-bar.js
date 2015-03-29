'use strict';

angular.module('app.directives')
  .directive('navBar',function() {
    return {
      // require: '^menuBar',
      restrict: 'E',
      scope: {
        links:'=',
        headinfo:'='
      },
      templateUrl:'/directives/sidebar/nav-bar.html'
    };
  });
