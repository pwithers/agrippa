'use strict';

angular.module('app.directives')
  .directive('nameDisplay',function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        text:'='
      },
      templateUrl:'/directives/sidebar/name-display.html'
    };
  });
