angular.module('you-tube-clone')
.directive('videoPlayer', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/videoPlayerDir/videoPlayerDir.html',
    controller: ($scope, mainService, $interval, $stateParams, $sce) => {

    //function for changing current video in service
    $scope.changeVideo = (video) => {
      mainService.newVideo = video;
    }

      const vidData = mainService.getTrending()
      .then((response) => {
        $scope.rawData = response;
      })


      $scope.singleVid = mainService.singleVid[0];

      $scope.$watch(function () {
        $scope.vidUrl = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${$scope.singleVid.id}?autoplay=1`)
      })

  




    }
  }






})
