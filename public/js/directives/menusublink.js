'use strict';

angular.module('app.directives')
  .directive('menuSublink',function() {
    return {
      restrict: 'E',
      scope: {
        link:'='
      },
      templateUrl:'/directives/sidebar/menu-sublink.html'
    };
  });
