let app = angular.module('TriviaApp',[]);

//Controllers
app.controller('triviaController',function($scope, $http){
  $scope.previousQuestions = [];
  $scope.questionConfig = {
    answer: 'random',
    question: 'random',
    value: 100,
    category: 'random',
    correct: '',
  }

  $scope.nextQuestion = function(){
    $http({
      method: 'GET',
      url: 'http://jservice.io/api/random',
    }).then(function(response){
      console.log(response);
      $scope.questionConfig = response.data[0];
    })
  };
  $scope.nextQuestion();
});//End of Controllers
