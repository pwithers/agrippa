'use strict';

angular.module('app.directives')
  .directive('menuLink',function() {
    return {
      require: '^menuSublink',
      restrict: 'E',
      scope: {
        main:'=',
        subs:'='
      },
      templateUrl:'/directives/sidebar/menu-link.html'
    };
  });
