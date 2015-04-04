'use strict';
angular.module('app.services')
.factory('questionService', ['$http', function($http){
   var questionService = {};

   var questions = $http.get('/api/questions/all').then(function(resp) {
     
      return resp.data;
   });

   questionService.questions = function () {return questions;};
   return questionService;

}]);
