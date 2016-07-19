module.exports = function(q){
   q.controller('questionsController',function ($scope, $http){
     $scope.question = {
       id: '',
       question: '',
       value: '',
     }
   })

}
