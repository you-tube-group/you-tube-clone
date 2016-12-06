angular.module('you-tube-clone')
  .directive('playList', () => {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './app/directives/landingPlaylistDir/landingPlaylistDir.html',
      scope: {
        hplaylist: "="
      },
      controller: ($scope, mainService) => {
        $scope.rightCount = 0;
        $scope.leftCount = 3;

        $scope.$watch('hplaylist', () => {
          // holds the playlist ID
          $scope.homePlaylistInfo = $scope.hplaylist
          var hplaylist = $scope.hplaylist.id;

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
              // NOTE: carousel right and left scrolling animation
              $('.landing-right-arrow-wrap').on('click', function(event) {
                var selection = $(this).parent()[0].children[0].children[0];
                $(selection).animate({
                  "marginRight": "+=854"
                }, {
                  duration: 700,
                  step: function(now, fx) {
                    if (now === fx.end) {
                      // console.log(fx.now);
                      $(this).stop(true, false);
                    }
                  },
                  start: function(now) {
                    // console.log("START", now.tweens[0].now);
                    if (now.tweens[0].now > -2500) {
                      // console.log("STOP BEFORE.");
                      $(this).stop(true, false);
                    }
                  }
                });
              });
              $('.landing-left-arrow-wrap').hide().on('click', function(event) {
                var selection = $(this).parent()[0].children[0].children[0];
                $(selection).animate({
                  "marginLeft": "+=854"
                }, {
                  duration: 700,
                  step: function(now, fx) {
                    if (now === fx.end) {
                      // console.log(fx.now);
                      $(this).stop(true, false);
                    }
                  },
                  start: function(now, fx) {
                      // console.log("START");
                    if (now < -2500) {
                      // console.log("START NOW: ", fx.now);
                      $(this).stop(true, false);
                    }
                  }
                });
              })

              // NOTE: Logic for the clicking
              $('#rcount').on('click', () => {
                $scope.rightCount++;
                $scope.leftCount--;

                // console.log("right", $scope.rightCount);
                // console.log("left", $scope.leftCount);
                if ($scope.rightCount >= 0) {
                  $('.landing-left-arrow-wrap').show();
                }
                if ($scope.rightCount === 3) {
                  $('.landing-right-arrow-wrap').hide();
                }
              })

              $('#lcount').on('click', () => {
                $scope.rightCount++;
                $scope.leftCount--;
                console.log("right", $scope.rightCount);
                console.log("left", $scope.leftCount);
                if ($scope.leftCount <= -3) {
                  $('.landing-left-arrow-wrap').hide();
                  $('landing-right-arrow-wrap').show();
                }
                // if ($scope.rightCount === 6) {
                //     $('landing-right-arrow-wrap').show();
                // }
              })
            }) // <-- end of jQuery

      } // <-- end of controller
    }
  });
    //restrict with A,E, or AE
