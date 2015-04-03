'use strict';
angular.module('app', ['app.controllers',
'app.directives',
'app.services',
'ngRoute'])
 .config(['$routeProvider',function($routeProvider){
  $routeProvider.when("/",
  {
    templateUrl: 'partials/index.html',
    controller: 'HomeControl'
  });
 }])
.controller('Controller', ['$scope', function($scope) {
  $scope.links = [{'main':{target:"/account",text:"Account",icon:"heart"},
                  'subs':[{target:"/",text:"1",icon:"heart"},
                    {target:"/little/monkey",text:"2",icon:"heart"}]},
                {'main':{target:"/",text:"Home",icon:"heart"},
                  'subs':[{target:"/you/dirty",text:"1",icon:"heart"},
                    {target:"/little/monkey",text:"2",icon:"heart"}]},
                {'main':{target:"/logout",text:"Logout",icon:"heart"}}];

}]);
