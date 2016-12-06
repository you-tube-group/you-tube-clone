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
          // var temp = response.items;



          $scope.trendingData = response;
          console.log('hello from the sideBarVideosDir!', $scope.trendingData);
        })
      };
      getTrendingData();

    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
