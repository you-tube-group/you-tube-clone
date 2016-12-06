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

      $scope.videoTime = (dateObj)=> {
        dateObj = moment(dateObj, 'YYYYMMDD').fromNow();
        return dateObj;
      }

      $scope.convertTime = (time) => {
          time = time.split(/[HMS]/);
          time[0] = time[0].split('');
          time[0].splice(0, 2);
          time[0] = time[0].join('');
          time.splice(time.length - 1, 1);
          var i = time.length - 1;
          if (time[i].length < 2) {
              time[i] = '0' + time[i]
          }
          time = time.join(':')
          if (time.length === 2) {
              time = '0:' + time
          }
          return time;
      }

    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
