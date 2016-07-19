(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
The app parameter being passed, is coming from app.js
declared by the statement: 'let app = angular.module('TriviaApp',[]);'

Controllers are meant to change data inside the view, however it does
not mutate it.
*/
module.exports = function (app) {
    app.controller('loginController', ['$scope', 'loginService','$location', function ($scope, loginService,$location) {
      let password = 'Password';
      let numPlayers = $scope.numPlayers;


// I am attaching this function to the button in the login.html templates start button.
      function logIn(){
        if($scope.password === logInfo.password){
//$location specifys where to go next..meaning what is showed in the addy bar.
          loginService.getNumPlayers(numPlayers);
          $location.path('/gameView');
        }
      }
    }]);
};

},{}]},{},[1])