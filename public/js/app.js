(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//Amanda showed me this one....so cool
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

},{}]},{},[1])