angular.module('you-tube-clone')
.directive('trendingViewDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/trendingView/trendingViewDir.html',
    controller: ($scope, mainService) => {
      const getTrendingData = () => {
        mainService.getTrending()
        .then((response) => {
          $scope.trendingData = response;


          console.log($scope.trendingData);
        })
      };
      getTrendingData();


      $scope.passVideo = (video) => {
        mainService.passVideo(video);
      }

    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
