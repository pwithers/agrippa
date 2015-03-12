'use strict';

angular.module('app.directives')
  .directive('menuBar',function() {
    return {
      require: '^menuLink',
      restrict: 'E',
      scope: {
        links:'='
      },
      templateUrl:'/directives/sidebar/menu-bar.html'
    };
  });
