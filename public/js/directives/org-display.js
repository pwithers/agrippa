'use strict';

angular.module('app.directives')
  .directive('orgDisplay',function() {
    return {
      restrict: 'E',
      scope: {
        text:'='
      },
      templateUrl:'/directives/sidebar/org-display.html'
    };
  });
