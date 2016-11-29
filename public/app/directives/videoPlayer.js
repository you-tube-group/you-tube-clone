angular.module('you-tube-clone')
.directive('videoPlayer', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/videoPlayer.html',
    controller: ($scope, mainService, $interval) => {

    //function for changing current video in service
    $scope.changeVideo = (video) => {
      mainService.newVideo = video;
    }

      const vidData = mainService.getTrending()
      .then((response) => {
        $scope.rawData = response;
      })


      $scope.singleVid = mainService.singleVid;




    }
  }






})
