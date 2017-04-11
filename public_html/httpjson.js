/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=angular.module("myapp",[]);

app.controller("main",function ($scope,$http){
    //$scope.result=0;
    
  $http.get("MOCK_DATA.JSON").then(function(response){
      $scope.result = response.data;
      //console.log($scope.result[4].name);
   }); 
    
    $scope.callcolor=function(col){
        if(col==='M')
        {
            $scope.col={ "border-color" : "red"}
        }
        else
        {
            $scope.col={"border-color":"blue"}
        }
        return($scope.col);
        
    };
});