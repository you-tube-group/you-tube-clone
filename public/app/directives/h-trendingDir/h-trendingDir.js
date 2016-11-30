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

                $scope.convertTime = (time) => {
                    time = time.split(/[HMS]/);
                    time[0] = time[0].split('');
                    time[0].splice(0,2);
                    time[0] = time[0].join('');
                    time.splice(time.length - 1, 1);
                    time = time.join(':')
                    if(time.length === 2){
                        time = '0:' + time
                    }
                    if(time.length)
                    console.log(time);
                    return time;
                }

                $scope.passVideo = (video) => {
              mainService.passVideo(video);
            }

        } //<-- end of controller
        }
    });
//restrict with A,E, or AE
