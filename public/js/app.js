'use strict';
angular.module('app', ['app.controllers',
'app.directives',
'app.services',
'ngRoute'])
 .config(['$routeProvider',function($routeProvider){
  $routeProvider.when("/",{
    templateUrl: 'partials/index.html',
    controller: 'HomeControl'
  })
  .when("/questions",{
    templateUrl: 'partials/questions/all.html',
    controller: 'QuestionsControl'
  })
  .when("/questions/:question_id",{
    templateUrl: 'partials/questions/view.html',
    controller: 'QuestionsViewControl'
  })
  .otherwise({
    templateUrl: 'partials/index.html',
    controller: 'HomeControl'
  });
 }])
.controller('Controller', ['$scope', function($scope) {
  $scope.links = [
                {'main':{target:"#/",text:"Home",icon:"heart"}},
                {'main':{target:"#/questions",text:"Your questions",icon:"comment"},
                'subs':[{target:"#/questions/ask",text:"Ask something",icon:"search"}]},
                {'main':{target:"#/answers",text:"Your answers",icon:"pencil"}},
                {'main':{target:"/logout",text:"Logout",icon:"remove"}}];

}]);
