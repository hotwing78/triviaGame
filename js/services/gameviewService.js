module.exports = function(app){

app.factory('gameviewService',['$http',function(app){
  let questions = [];

  let getCategories = function(){
    $http({
      method: 'GET',
      url: 'http://jservice.io/api/categories?count=5',
    })
  }

}]);
}
