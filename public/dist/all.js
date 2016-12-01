'use strict';

angular.module('you-tube-clone', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/views/homeView.html'
    }).state('trending', {
        url: '/trending',
        templateUrl: './app/views/trendingView.html'
    }).state('video', {
        url: "/:videoId",
        templateUrl: './app/views/videoPlayer.html'
    });
});
'use strict';

angular.module('you-tube-clone').controller('mainCtrl', function ($scope, mainService) {

  $scope.broken = mainService.broken;
});
'use strict';

angular.module('you-tube-clone').service('mainService', function ($http, $state) {
  var _this = this;

  this.broken = 'working';

  this.getTrending = function () {
    return $http({
      method: 'GET',
      url: '/trending'
    }).then(function (response) {
      // console.log(response);
      return response.data;
    });
  };
  this.singleVid = [];
  this.passVideo = function (video) {
    _this.singleVid[0] = video;
  };
});
'use strict';

angular.module('you-tube-clone').directive('searchDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchDir.html',
    controller: function controller($scope, mainService) {
      var vidData = mainService.getTrending().then(function (response) {
        $scope.rawData = response;
      });
    }
  };
});
'use strict';

angular.module('you-tube-clone').directive('hTrendingDir', function () {

    return {
        restrict: 'E',
        templateUrl: './app/directives/h-trendingDir/h-trendingDir.html',
        controller: function controller($scope, mainService) {
            var getTrendingHome = function getTrendingHome() {
                mainService.getTrending().then(function (response) {
                    $scope.trendingVideos = response;
                    console.log($scope.trendingVideos);
                });
            };
            getTrendingHome();
            // NOTE: This converts the time for the video duration
            $scope.convertTime = function (time) {
                time = time.split(/[HMS]/);
                time[0] = time[0].split('');
                time[0].splice(0, 2);
                time[0] = time[0].join('');
                time.splice(time.length - 1, 1);
                var i = time.length - 1;
                if (time[i].length < 2) {
                    time[i] = '0' + time[i];
                }
                time = time.join(':');
                if (time.length === 2) {
                    time = '0:' + time;
                }
                return time;
            };
            $scope.passVideo = function (video) {
                mainService.passVideo(video);
            };

            $scope.publishConverter = function (published) {
                published = moment(published, "YYYYMMDD").fromNow();
                console.log(published);
                return published;
            };
            // NOTE: jQuery for carousel buttons
            $(document).ready(function () {
                $('.right-arrow-container').on('click', function () {
                    $('.right-arrow-container').removeClass('.right-arrow-container').addClass('right-nav-arrow-container');
                }).mouseover(function () {
                    $('.right-arrow-container').removeClass('.right-arrow-container').addClass('right-nav-arrow-container');
                }).mouseleave(function () {
                    $('.right-nav-arrow-container').removeClass('right-nav-arrow-container').addClass("right-arrow-container");
                });
                // NOTE: End of the right arrow style effect

                $('.left-arrow-container').on('click', function () {
                    $('.left-arrow-container').removeClass('.left-arrow-container').addClass('left-nav-arrow-container');
                }).mouseover(function () {
                    $('.left-arrow-container').removeClass('.left-arrow-container').addClass('left-nav-arrow-container');
                }).mouseleave(function () {
                    $('.left-nav-arrow-container').removeClass('.left-nav-arrow-container').addClass('.left-arrow-container');
                });
                // FIXME: work on the mouseleave for the left carousel
            }); //<-- End of jQuery script

        } //<-- end of controller
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('you-tube-clone').directive('searchBarDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchBarDir/searchBarDir.html',
    controller: function controller($scope) {
      $('.search-bar-dir-outer-container').hover(function () {
        $('.ham-icon').css({ "height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -469px -74px", "background-size": "auto" });
      }, function () {
        $('.ham-icon').css({ "height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -696px -258px", "background-size": "auto" });
      });
    }
  };
});
'use strict';

angular.module('you-tube-clone').directive('trendingViewDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/trendingView/trendingViewDir.html',
    controller: function controller($scope, mainService) {
      var getTrendingData = function getTrendingData() {
        mainService.getTrending().then(function (response) {
          $scope.trendingData = response;
          console.log('trending data:');
          console.log($scope.trendingData);
        });
      };
      getTrendingData();

      $scope.passVideo = function (video) {
        mainService.passVideo(video);
      };

      //END OF CONTROLLER
    }
    //END OF RETURN (DIRECTIVE)
  };
});
'use strict';

angular.module('you-tube-clone').directive('videoPlayer', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/videoPlayerDir/videoPlayerDir.html',
    controller: function controller($scope, mainService, $interval, $stateParams, $sce) {

      //function for changing current video in service
      $scope.changeVideo = function (video) {
        mainService.newVideo = video;
      };

      var vidData = mainService.getTrending().then(function (response) {
        $scope.rawData = response;
      });

      $scope.singleVid = mainService.singleVid[0];

      $scope.$watch(function () {
        $scope.vidUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.singleVid.id + '?autoplay=1');
      });
    }
  };
});