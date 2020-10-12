
(function (){
'use strict';

angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
$scope.name = 'Anubrolu Krishna Chaitanya';
$scope.sayHello = function(){
  return "First course";
};
});

})();
