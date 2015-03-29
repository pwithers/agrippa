'use strict';
angular.module('app.directives')
  .directive('headUnit',[function() {

    return {
      // require: ['^nameDisplay',
      //           '^orgDisplay'],
      restrict: 'E',
      controller: 'HeadUnit',

      // scope: {
      //   main:'='
      // },
      link: function(scope,element,attrs,headUnitCtrl){
        headUnitCtrl.init(element);
      },
      templateUrl:'/directives/sidebar/head-unit.html'
    };
  }]);
