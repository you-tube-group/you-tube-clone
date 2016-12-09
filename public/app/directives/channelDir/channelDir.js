angular.module('you-tube-clone')
.directive('channelDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/channelDir/channelDir.html',
    scope: {
      channelData: '='
    },
    controller: ($scope, $stateParams, $sce, $timeout, mainService) => {

      $scope.channelTrailerId = $scope.channelData.brandingSettings.channel.unsubscribedTrailer;

      $scope.videoUrl = "https://www.youtube.com/embed/" + $scope.channelTrailerId +
      "?autoplay=1&origin=http://example.com";

      $scope.channelTrailer = $sce.trustAsResourceUrl($scope.videoUrl);
      
      $scope.convertTime = (time) => {
        time = moment(time, "YYYYMMDD").fromNow();
        return time;
      };













    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
