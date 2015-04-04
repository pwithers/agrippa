'use strict';
angular.module('app.controllers')
.controller('QuestionsControl',["$scope","questionService",function($scope,questionService) {
  $scope.query= '';
  questionService.questions().then(function(r){
    var out = [];
    for (var key in r.questions) {
      if (r.questions.hasOwnProperty(key)){
      var t = r.questions[key];
      t._id = key;
      out.push(t);
      }
    }
    $scope.questions = out;
  });
}]);
