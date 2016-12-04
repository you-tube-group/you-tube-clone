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
                            console.log($scope.trendingVideos);
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
              console.log(published);
              return published;
          };
// NOTE: jQuery for carousel buttons
    // $scope.marginLeft = {
    //     "margin-left": 0
    // }
    //
    // $scope.scrollRight = () => {
    //     if($scope.marginLeft.margin-left){
    //
    //     }
    // }

$(() =>{
// NOTE: to move slide 1 place = 427 (muliply number of slides you want to move by 427)
    $('.arrow-wrap-right').on('click', () => {
        $('.trending-vid-carousel').animate({"margin-left": "-=854"}, 700);
    });

    $('.arrow-wrap').on('click', () => {
        $('.trending-vid-carousel').animate({"margin-right": "-=854"}, 700);
    });
}); //<-- end of jQuery



        } //<-- end of controller
        }
    });
//restrict with A,E, or AE
