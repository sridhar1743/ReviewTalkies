/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var app = angular.module('myApp', ['ngRoute', 'slick']);
//alert("Onkaresh222222222");
//app.controller('mainController', function($scope, $timeout) {
//
//  alert("heloooo......");
//  $timeout(function() {
//    $scope.images = [
//      "http://vasyabigi.github.io/angular-slick/images/lazyfonz1.png",
//      "http://vasyabigi.github.io/angular-slick/images/lazyfonz2.png",
//      "http://vasyabigi.github.io/angular-slick/images/lazyfonz3.png",
//    ];
//  }, 1000);
//});

//var app = angular.module("myApp", ['ngRoute', 'ui.bootstrap']);
//
//alert("Onkaresh222222222");
//
//app.controller('mainController', function($scope) {
//
//  alert("heloooo......");
//
//  $scope.myInterval = 5000;
//  $scope.noWrapSlides = false;
//  $scope.active = 0;
//  //var slides = $scope.slides = [];
//  //var currIndex = 0;
//
//  $scope.images = [
//    {
//      image: 'public/images/roll/1.jpg'
//    },
//    {
//      image: 'images/roll/2.jpg'
//    },
//    {
//      image: 'public/images/roll/3.jpg'
//    },
//    {
//      image: 'public/images/roll/4.jpg'
//    },
//    {
//      image: 'public/images/roll/5.jpg'
//    },
//    {
//      image: 'public/images/roll/6.jpg'
//    },
//    {
//      image: 'images/roll/7.jpg'
//    },
//    {
//      image: 'images/roll/8.jpg'
//    },
//    {
//      image: 'images/roll/9.jpg'
//    },
//    {
//      image: 'images/roll/10.jpg'
//    }
//  ];
//
//});

var app = angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('CarouselDemoCtrl', function($scope, allServices) {

  alert("demoCtrl,,,,");

  $scope.onkar = true

  $scope.carouselTimer = 5000;
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;



// The slider being synced must be initialized first
  $('#main-slider').flexslider({
    animation: "slide",
  });

  $('#reviews-slider').flexslider({
    animation: "slide",
    itemWidth: 200,
    itemMargin: 1,
    minItems: 3,
    maxItems: 9,
    move: 0,
  });

  $scope.slides = [
    {
      image: 'public/images/roll/1.jpg'
    },
    {
      image: 'public/images/roll/2.jpg'
    },
    {
      image: 'public/images/roll/3.jpg'
    },
    {
      image: 'public/images/roll/4.jpg'
    },
    {
      image: 'public/images/roll/5.jpg'
    },
    {
      image: 'public/images/roll/6.jpg'
    },
    {
      image: 'public/images/roll/7.jpg'
    },
    {
      image: 'public/images/roll/8.jpg'
    },
    {
      image: 'public/images/roll/9.jpg'
    },
    {
      image: 'public/images/roll/10.jpg'
    }
  ];


  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }



  $scope.firstImage = function() {
    alert("hello onkaresh");
    $scope.filmName = "Dangal";
    $scope.movieId = 2;

    alert($scope.movieId);
    //alert($scope.id);

//    var data = {
//
//     "movieId": 1
//    };


    allServices.requestMovie($scope.movieId).then(function(result) {

      alert(result);

    }, function(error) {


    });

  };


});




app.factory('allServices', ['$q', '$http', function($q, $http) {
    return {

      requestMovie: function(movieId) {

        alert("@@@@@@@@", movieId);


        var req = {
          method: 'POST',
          url: '/getMovieDetailsWithId',
          data: {
            movieId: movieId
          }
        };

        var deferred = $q.defer(),
            httpPromise = $http(req);
        httpPromise.then(function(response) {

          alert("yyyyyy", response);

          deferred.resolve(response);
        }, function(error) {
          console.error(error);
        });
        return deferred.promise;
      }

    };


  }]);

