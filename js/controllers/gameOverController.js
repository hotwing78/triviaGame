module.exports = function(app){
  app.controller('gameOverController',['$scope','$location','loginService',function($scope,$location,loginService){
      $scope.restart = function(){
        $location.path('/');
      }
  }]);
};
