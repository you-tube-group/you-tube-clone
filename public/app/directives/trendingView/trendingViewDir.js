angular.module('you-tube-clone')
.directive('trendingViewDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/trendingView/trendingViewDir.html',
    controller: ($scope, mainService) => {
      const getTrendingData = () => {
        mainService.getTrending()
        .then((response) => {
          $scope.trendingData = response.items;
          // console.log($scope.trendingData);
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

    $(document).ready(function(e) {

      $('.home').mouseenter(function(e) {
          $(e.currentTarget).css('border-bottom', 'solid #CC181E 3px');
          $(e.currentTarget).mouseleave(function(event) {
          $(e.currentTarget).css('border-bottom', 'solid #fff 0px');
          });
      });

      $('.subscriptions').mouseenter(function(e) {
        $(e.currentTarget).css('border-bottom', 'solid #CC181E 3px');
        $(e.currentTarget).mouseleave(function(e) {
          $(e.currentTarget).css('border-bottom', 'solid #fff 0px');
        });
      });


    });


    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
