'use strict';

angular.module('you-tube-clone', ['ui.router', 'ngSanitize']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
    url: '/'
  }).state('trending', {
    url: '/trending',
    templateUrl: './app/views/trendingView.html'
  }).state('video', {
    url: "/watch/:videoId",
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

  this.getVideoInfo = function (id) {
    console.log('Id from the service' + id);
    return $http({
      method: 'GET',
      url: '/api/watch/?id=' + id
    }).then(function (response) {
      return response.data;
    });
  };

  this.getComments = function (id) {

    return $http({
      method: 'GET',
      url: '/api/comments/?id=' + id
    }).then(function (response) {

      return response.data;
    });
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

angular.module('you-tube-clone').directive('commentsDir', function () {
  return {
    restrict: 'E',
    templateUrl: './app/directives/commentsDir/commentsDir.html',
    scope: {
      vidId: '='
    },
    controller: function controller($scope, mainService, $sce) {
      $scope.$watch('vidId', function () {
        var vidId = $scope.vidId;

        if (vidId) {
          $scope.getComments = function (vidId) {
            mainService.getComments(vidId).then(function (response) {
              $scope.comments = response;
            });
          };
          $scope.getComments(vidId);
        }
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

      var id = $stateParams.videoId;

      //get the video data for the clicked video
      $scope.getVideoInfo = function (id) {
        mainService.getVideoInfo(id).then(function (response) {
          $scope.videoInfo = response;

          $scope.videoId = response.items[0].id;
          $scope.videoUrl = "https://www.youtube.com/embed/" + $scope.videoId + "?autoplay=1&origin=http://example.com";
          $scope.thisUrl = $sce.trustAsResourceUrl($scope.videoUrl);

          // this specific variable holds the video info (ie title, and statistics)
          $scope.videoData = response.items[0];
        });
      };
      $scope.getVideoInfo(id);
    }
  };
});