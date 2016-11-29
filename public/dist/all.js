'use strict';

angular.module('you-tube-clone', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
    url: '/',
    templateUrl: '<div>HELLO WORLD</div>'
  }).state('trending', {
    url: '/trending',
    templateUrl: './app/views/trendingView.html'
  }).state('video', {
    url: "/:videoId",
    templateUrl: './directives/videoPlayer.html'
  });
});
'use strict';

angular.module('you-tube-clone').controller('mainCtrl', function ($scope, mainService) {

  $scope.broken = mainService.broken;
});
'use strict';

angular.module('you-tube-clone').service('mainService', function ($http) {

  this.broken = 'working';

  this.getTrending = function () {
    return $http({
      method: 'GET',
      url: '/trending'
    }).then(function (response) {
      console.log(response);
      return response.data;
    });
  };

  this.newVideo = '';
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

angular.module('you-tube-clone').directive('videoPlayer', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/videoPlayer.html',
    controller: function controller($scope, mainService) {

      //function for changing current video in service
      $scope.changeVideo = function (video) {
        mainService.newVideo = video;
      };

      var vidData = mainService.getTrending().then(function (response) {
        $scope.rawData = response;
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
          console.log('trneing tdatat');
          console.log($scope.trendingData);
        });
      };
      getTrendingData();

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
        console.log("hovering");
        $('.ham-icon').css({ "height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -469px -74px", "background-size": "auto" });
      }, function () {
        $('.ham-icon').css({ "height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -696px -258px", "background-size": "auto" });
      });
    }
  };
});