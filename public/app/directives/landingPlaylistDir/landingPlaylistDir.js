angular.module('you-tube-clone')
    .directive('playList', () => {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: './app/directives/landingPlaylistDir/landingPlaylistDir.html',
            scope: {
                hplaylist: "=",
                dirmessage: "="
            },
            controller: ($scope, mainService) => {
                $scope.$watch('hplaylist', () => {
                  // holds the playlist ID
                  var hplaylist = $scope.hplaylist;

                  if (hplaylist) {
                    $scope.getHomePlaylist = (hplaylist) => {
                      mainService.getHomePlaylist(hplaylist).then((response) => {
                        $scope.homePlaylistObj = response.items;
                        // ==== Create empty array to hold stats of all videos in playlist ====
                        $scope.videoStatsArr = [];
                        for (var i = 0; i < $scope.homePlaylistObj.length; i++) {
                          const vidId = $scope.homePlaylistObj[i].snippet.resourceId.videoId;

                          $scope.getVideoInfo = (vidId) => {
                            // ==== call the service to get statistics for each video in the playlist ====
                            mainService.getVideoInfo(vidId).then((response) => {
                                $scope.videoInfo = response.items[0];
                                // ==== If the id of video info matches the ID of the video in the playlist, push all info to videoStatsArr ====
                                if ($scope.videoInfo.id == vidId) {
                                    $scope.videoStatsArr.push($scope.videoInfo);
                                }
                            })
                          }
                          $scope.getVideoInfo(vidId)
                        }
                    })
                    }
                  }
                    $scope.getHomePlaylist(hplaylist);
                })

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
                $scope.publishConverter = (published) => {
                    published = moment(published, "YYYYMMDD").fromNow();
                    return published;
                };
                // NOTE: start of jQuery for carousel functionality
                $(() => {
                    $('.landing-left-arrow-wrap').on('click', () => {
                        $('.videos-vid-carousel').animate({
                            "margin-left": "-=854"
                        }, 700);
                    });
                })

            }
        }
    });
//restrict with A,E, or AE
