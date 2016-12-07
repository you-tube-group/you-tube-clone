angular.module('you-tube-clone')
    .directive('hTrendingDir', () => {

        return {
      restrict: 'E',
      templateUrl: './app/directives/h-trendingDir/h-trendingDir.html',
      controller: ($scope, mainService) => {
              $scope.hover = false;

              const getTrendingHome = () => {
                  mainService.getTrending()
                      .then((response) => {
                          $scope.trendingVideos = response;
                      })
              }
              getTrendingHome();

  // NOTE: This converts the time for the video duration
              $scope.passVideo = (video) => {
                  mainService.passVideo(video);
              }
              $scope.publishConverter = (published) => {
                  published = moment(published, "YYYYMMDD").fromNow();
                  return published;
              };

// NOTE: jQuery trending carousel 
            $(() => {

                // NOTE: to move slide 1 place = 427 (muliply number of slides you want to move by 427)
                $('.arrow-wrap-right').on('click', () => {
                    $('.trending-vid-carousel').animate({
                        "margin-left": "-=854"
                    }, 700);
                });

                $('.arrow-wrap').on('click', () => {
                    $('.trending-vid-carousel').animate({
                        "margin-right": "-=854"
                    }, 700);
                });
            }); //<-- end of jQuery
        } //<-- end of controller
}
});
//restrict with A,E, or AE
