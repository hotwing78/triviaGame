let app = angular.module('TriviaApp',['ngRoute']);
//modules
require('./question')(app);
//Controllers

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
      .when('/',{
          redirectTo: '/logIn',
      })
      .when('/logIn',{
         controller: 'logControls',
         templateUrl: 'templates/logIn.html',
      })
      .when('/gameView'),{
         controller: 'gameViewController',
         templateUrl: 'template/game.html'
      },
      .when('/endGame'),{
        controller: 'endGameControls',
        templateUrl: 'template/gameOver'
      })
      .otherwise({
        templateUrl: 'templates/error.html',
      })
}]);
app.controller('gameViewController',['$scope','question'{
  // $scope.previousQuestions = [];
  // $scope.questionConfig = {
  //   answer: 'random',
  //   question: 'random',
  //   value: 100,
  //   category: 'random',
  //   correct: '',
  // }
//Amanda showed me this one....so cool
  // $scope.nextQuestion = function(){
  //   $http({
  //     method: 'GET',
  //     url: 'http://jservice.io/api/random',
  //   }).then(function(response){
  //     console.log(response);
  //     $scope.questionConfig = response.data[0];
  //   })
  // };
  // $scope.nextQuestion();
  //***************************
  $scope.correctAnswer = function() {
    $scope.rightAnswer = $scope.myQuestion.answer
    if ($scope.userAnswer === $scope.myQuestion.answer) {
      console.log('correct');
      let addScore = Number($scope.myQuestion.value + $scope.score)
      $scope.score = addScore
    } else {
      console.log("incorrect");
      let subScore = Number($scope.score - $scope.myQuestion.value)
      $scope.score = subScore
    }
  }

});//End of Controllers
