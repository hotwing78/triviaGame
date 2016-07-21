(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {

    app.factory('gameviewService', ['$http', function(app) {
        let categories = [];
        let questions = [];

        return {
            getCategories: function(count) {
                $http({
                    url: `http://jservice.io/api/categories?count=${count}`,
                    method: 'get',
                }).then(function(results) {
                    let response = results.data;

                    // Add these to the existing array (don't clear out the
                    // stuff that's already there).
                    response.forEach(function(category) {
                        categories.push(category);
                    });
                });

                return categories;
            },
            getQuestionsForCategory: function(categoryId) {
                angular.copy([], questions);

                $http({
                    url: `http://jservice.io/api/category?id=${categoryId}`,
                    method: 'get',
                }).then(function(results) {
                    let response = results.data.clues;

                    // Copy response (question array from api) in questions array.
                    angular.copy(response, questions);
                });

                return questions;
            }
        };
    }]);
};

},{}]},{},[1])