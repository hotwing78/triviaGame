(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app){
  app.controller('gameOverController',['$scope','$location','loginService',function($scope,$location,loginService){
      $scope.restart = function(){
        $location.path('/');
      }
  }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(app){
  app.controller('gameViewController',['$scope','loginService',function($scope,loginService){
    $scope.categories = gameviewService.getCategories(1);

  }]);
};

},{}],3:[function(require,module,exports){
/*
The app parameter being passed, is coming from app.js
declared by the statement: 'let app = angular.module('TriviaApp',[]);'

Controllers are meant to change data inside the view, however it does
not mutate it.
*/
module.exports = function (app) {
    app.controller('loginController', ['$scope', 'loginService','$location', function ($scope, loginService,$location) {
      let password = '123'
      let numPlayers = Number($scope.numPlayers);




// I am attaching this function to the button in the login.html templates start button.
     $scope.logIn = function(){
          console.log(password)
          console.log(numPlayers)
        if($scope.password === password){

//$location specifys where to go next..meaning what is showed in the addy bar.
          loginService.getNumPlayers(numPlayers);
          $location.path('/gameView');
        }
      }
    }]);
};

},{}],4:[function(require,module,exports){
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

},{"./controllers/gameOverController":1,"./controllers/gameViewController":2,"./controllers/loginController":3,"./services/loginService":5}],5:[function(require,module,exports){
/*
The app parameter being passed, is coming from app.js
declared by the statement: 'let app = angular.module('TriviaApp',[]);'
*/
module.exports = function (app) {
                 //NAME           DEPENDENCIES
    app.factory('loginService', ['$http', function($http) {
        let info = [];
        let players = '';
        let password = '123'
        return{
          getNumPlayers: function(num){

            players = num;
              console.log(players);
          },
          getPassword: function(){
            return password;
          }
        }
    }]);
};

},{}]},{},[4])