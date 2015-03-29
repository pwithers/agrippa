'use strict';
angular.module('app.services')
.factory('userService', ['$http', function($http){
  var aPrivateVariable = "last";

  function hello() {
    return "first " + aPrivateVariable;
  }

  // expose a public API
  return {
    hello: hello
  };

}]);
