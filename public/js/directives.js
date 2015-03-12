'use strict';

/* Directives */

angular.module('app.directives', [])
  .directive('sidebarNavigation',function() {
    return {
      templateUrl:'/directives/sidebar-navigation.html'
      //template: '<p>Heelo<p/>'
    };
  });
