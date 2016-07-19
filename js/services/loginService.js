/*
The app parameter being passed, is coming from app.js
declared by the statement: 'let app = angular.module('TriviaApp',[]);'
*/
module.exports = function (app) {
                 //NAME           DEPENDENCIES
    app.factory('loginService', ['$http', function($http) {
        let info = [];
        let players = '';
        return{
          getNumPlayers: function(num){
            players = num;
          }
        }
    }]);
};
