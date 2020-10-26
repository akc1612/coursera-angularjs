(function () {
'use strict';

angular.module('LunchChecker',[])
.controller('LunchController',function($scope){
$scope.message ="";
$scope.lunchitems = "";
$scope.Lunchchecker  = function(){
  if($scope.lunchitems == ""){
    $scope.message = "Please enter data first";
  }
  else {
    var lunchallitems = $scope.lunchitems.split(",");
    var returnmessage = calculateLunch(lunchallitems);
    $scope.message = returnmessage;
  }

};

function calculateLunch(luncharray){

if (luncharray.length <= 3)
 {
   return "Enjoy!";
 }
else {
  return "Too much!";
}
}
}
)})();
