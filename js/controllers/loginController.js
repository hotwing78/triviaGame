/*
The app parameter being passed, is coming from app.js
declared by the statement: 'let app = angular.module('TriviaApp',[]);'

Controllers are meant to change data inside the view, however it does
not mutate it.
*/
module.exports = function (app) {
    app.controller('loginController', ['$scope', 'loginService','$location', function ($scope, loginService,$location) {
      let password = '123';
      let numPlayers = $scope.numPlayers;
      console.log(numPlayers);


// I am attaching this function to the button in the login.html templates start button.
      function logIn(){
          console.log($location)
          console.log('click click')
        if($scope.password === logInfo.password){
          console.log(numPlayers)
//$location specifys where to go next..meaning what is showed in the addy bar.
          loginService.getNumPlayers(numPlayers);
          console.log($location)
          $location.path('/gameView');
        }
      }
    }]);
};
