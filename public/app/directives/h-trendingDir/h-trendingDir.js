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
                            // console.log($scope.trendingVideos);
                        })
                }
                getTrendingHome();
// NOTE: This converts the time for the video duration
                $scope.convertTime = (time) => {
                    time = time.split(/[HMS]/);
                    time[0] = time[0].split('');
                    time[0].splice(0,2);
                    time[0] = time[0].join('');
                    time.splice(time.length - 1, 1);
                    var i = time.length -1;
                    if(time[i].length < 2){
                        time[i] = '0' + time[i]
                    }
                    time = time.join(':')
                    if(time.length === 2){
                        time = '0:' + time
                    }
                    return time;
                }
                $scope.passVideo = (video) => {
              mainService.passVideo(video);
            }

            $scope.publishConverter = (published) => {
             published = moment(published, "YYYYMMDD").fromNow();
              return published;
          };

$(() =>{
// NOTE: multiply 427 by the number of slides you want to move right or left
    $('.arrow-wrap-right').on('click', () => {
        var rightClick = 1;
        var rightCount = ++rightClick;
        console.log(rightClick);
        console.log(rightCount);



        var endOfCarousel = -7686;
        var currentSpotRight = $('.trending-vid-carousel').css("margin-left");
        $('.trending-vid-carousel').animate({"margin-left": "-=854"}, 600);
        console.log(currentSpotRight);
    });

    $('.arrow-wrap').on('click', () => {
        var startOfCarousel = 0;
        var currentSpotLeft = $('.trending-vid-carousel').animate("margin-right");
        console.log(currentSpotLeft);
        $('.trending-vid-carousel').animate({"margin-right": "-=854"}, 600);
        // console.log(currentSpotLeft);
    });
}); //<-- end of jQuery

        } //<-- end of controller
        }
    });
//restrict with A,E, or AE
