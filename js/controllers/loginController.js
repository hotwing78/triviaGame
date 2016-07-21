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
