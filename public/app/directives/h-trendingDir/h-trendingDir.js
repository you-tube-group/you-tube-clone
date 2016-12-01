angular.module('you-tube-clone')
    .directive('hTrendingDir', () => {

        return {
            restrict: 'E',
            templateUrl: './app/directives/h-trendingDir/h-trendingDir.html',
            controller: ($scope, mainService) => {
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
$(document).ready(function (){
    $('.right-arrow-container').on('click', () =>{
        $('.right-arrow-container').removeClass('.right-arrow-container').addClass('right-nav-arrow-container');
    }).mouseover(() => {
        $('.right-arrow-container').removeClass('.right-arrow-container').addClass('right-nav-arrow-container');
    }).mouseleave(() =>{
        $('.right-nav-arrow-container').removeClass('right-nav-arrow-container').addClass("right-arrow-container");
    });
    // NOTE: End of the right arrow style effect

    $('.left-arrow-container').on('click', () =>{
        $('.left-arrow-container').removeClass('.left-arrow-container').addClass('left-nav-arrow-container');
    }).mouseover(() =>{
        $('.left-arrow-container').removeClass('.left-arrow-container').addClass('left-nav-arrow-container');
    }).mouseleave(() => {
        $('.left-nav-arrow-container').removeClass('.left-nav-arrow-container').addClass('.left-arrow-container');
    });
// FIXME: work on the mouseleave for the left carousel
}); //<-- End of jQuery script





        } //<-- end of controller
        }
    });
//restrict with A,E, or AE
