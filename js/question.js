module.exports = function(app) {
        app.factory('player', function() {
            return
            let player = {
                id: '',
                score: '',
                incorrect: 0,
            };
        });

        app.factory('cats', function($http) {
          //things I want to return
          let catNames = [];
          let questions = [];

                $http({
                  //calling for 6 categories
                    url: 'http://jservice.io/api/categories?count=6',
                }).then(function(results) {
                  // putting calls into an array and returning cats
                    let categories = results.data;
                    catNames = categories.map(function(obj){
                      return obj.title;
                    })

                });
            }
        }
