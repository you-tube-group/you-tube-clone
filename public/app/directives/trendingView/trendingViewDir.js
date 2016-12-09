angular.module('you-tube-clone')
.directive('trendingViewDir', function() {

  return {
    restrict: 'EC',
    templateUrl: './app/directives/trendingView/trendingViewDir.html',
    // link: function(scope, element, attrs) {
    //   $(document).ready(function() {
    //     $('.thumbnail').hover(function() {
    //       $('.thumbnail').css({
    //         "width": "10px"
    //       })
    //     })
    //   })
    // },
    controller: ($scope, mainService, $timeout) => {
      const getTrendingData = () => {
        mainService.getTrending()
        .then((response) => {
          $scope.trendingData = response.items;


          console.log($scope.trendingData);
        })
      };
      getTrendingData();


      $scope.passVideo = (video) => {
        mainService.passVideo(video);
      }

      $scope.videoTime = (dateObj)=> {
        dateObj = moment(dateObj, 'YYYYMMDD').fromNow();
        return dateObj;
      }





    //END OF CONTROLLER
  }
  //END OF RETURN (DIRECTIVE)
  }
})
