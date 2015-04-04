'use strict';
angular.module('app.controllers')
.controller('QuestionsViewControl',["$scope","questionService",function($scope,questionService) {
  questionService.questions().then(function(r){
    $scope.questions = r.questions;
  });
}]);
