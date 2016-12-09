angular.module('you-tube-clone')
    .directive('hTrendingDir', () => {

        return {
            restrict: 'E',
            templateUrl: './app/directives/h-trendingDir/h-trendingDir.html',
            controller: ($scope, mainService) => {
                    $scope.counter = 0;
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
                        $('.right-arrow-container').on('click', () => {
                            $('.carousel-wrapper').animate({
                                "left": "-=2090"
                            }, 400);
                        });

                        $('.left-arrow-container').on('click', () => {
                            $('.carousel-wrapper').animate({
                                "left": "+=2090"
                            }, 400);
                        });
            $('#rcount').on('click', (e) => {
                $scope.counter++;

                if ($scope.counter >= 2 ){
                  $(e.currentTarget).css('visibility', 'hidden');
                  $(e.currentTarget.nextSibling.parentNode.firstElementChild).css('visibility', 'visible');
                  $(e.currentTarget.nextSibling.parentNode.firstElementChild.firstElementChild).css('visibility', 'visible');
                }
              })
              $('#lcount').on('click', (e) => {
                $scope.counter--;

                if ($scope.counter <= 0) {
                  $(e.currentTarget.firstElementChild).css('visibility', 'hidden');
                  $(e.currentTarget).css('visibility', 'hidden');
                  $(e.currentTarget.nextElementSibling).css('visibility', 'visible');
                }
            });



                    }); //<-- end of jQuery
                } //<-- end of controller
        }
    });
//restrict with A,E, or AE
