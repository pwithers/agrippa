'use strict';

angular.module('app.directives')
  .directive('questionBlock',function() {
    return {
      restrict: 'E',
      scope: {
        question:'='
      },
      templateUrl:'/directives/questions/question-block.html'
    };
  });
