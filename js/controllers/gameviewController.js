module.exports = function(app){
  app.controller('gameViewController',['$scope','loginService',function($scope,loginService){
    $scope.categories = gameviewService.getCategories(1);

  }]);
};
