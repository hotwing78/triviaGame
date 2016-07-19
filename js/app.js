let app = angular.module('TriviaApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/',{
    controller: 'loginController',
    templateUrl: 'templates/logIn'
    })
  .when('/gameView',{
    controller: 'gameViewController',
    templateUrl:'templates/gameView',
  });
}]);

//I am importing my services and controllers here

//services .....but why is app in parenthesis?
require('./services/loginService');

//Controllers
require('./controllers/loginController')(app);
require('./controllers/gameViewController')(app);

//Controllers
// app.controller('triviaController',function($scope, $http){
//   $scope.previousQuestions = [];
//   $scope.questionConfig = {
//     answer: 'random',
//     question: 'random',
//     value: 100,
//     category: 'random',
//     correct: '',
//   }
//
//   $scope.nextQuestion = function(){
//     $http({
//       method: 'GET',
//       url: 'http://jservice.io/api/random',
//     }).then(function(response){
//       console.log(response);
//       $scope.questionConfig = response.data[0];
//     })
//   };
//   $scope.nextQuestion();
// });//End of Controllers
