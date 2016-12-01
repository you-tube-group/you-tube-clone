// sideBarVideosDir


angular.module('you-tube-clone')
.directive('sideBarVideosDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/side-bar-videos/side-bar-videos.html',
    controller: ($scope, mainService) => {
      const getTrendingData = () => {
        mainService.getTrending()
        .then((response) => {
          $scope.trendingData = response.items;
          console.log('hello from the sideBarVideosDir!');
          console.log($scope.trendingData);
        })
      };
      getTrendingData();

    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
