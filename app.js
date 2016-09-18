(function (){
'user strict';



angular.module('checkTooMuch',[])
.controller('Controller1',checkTooMuch);
checkTooMuch.$inject = ['$scope'];


function checkTooMuch($scope)
{
$scope.list = "";
  $scope.checkOnClick = function()
  {

      if($scope.list.trim() == '')
    {
        $scope.result = "Please enter data first"
        $scope.myObj = {
             "color" : "red"
           }
           $scope.borderColor = {
             "border-color" : "red"
           }
    }
    else if($scope.list.split(',').length > 3)
    {

        $scope.result =  "Too much!";
        $scope.myObj = {
             "color" : "green"
           }
           $scope.borderColor = {
             "border-color" : "green"
           }
    }
    else
    {

        $scope.result = "Enjoy!";
        $scope.myObj = {
             "color" : "green"
           }
           $scope.borderColor = {
             "border-color" : "green"
           }
    }
  };
};

})();
