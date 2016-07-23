let app = angular.module('TriviaApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
          redirectTo: '/gameView',
      })
  .when('/login',{
    controller: 'loginController',
    templateUrl: './templates/login.html'
    })
  .when('/gameView',{
    controller: 'gameViewController',
    templateUrl:'./templates/gameView.html',
  })
  .when('/gameOver',{
    controller: 'gameOverController',
    templateUrl: './templates/gameOver.html'
  });
}]);

//I am importing my services and controllers here

//services .....but why is app in parenthesis?
require('./services/loginService')(app);

//Controllers
require('./controllers/loginController')(app);
require('./controllers/gameViewController')(app);
require('./controllers/gameOverController')(app);

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
