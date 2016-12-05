angular.module('you-tube-clone')
    .directive('playList', () => {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: './app/directives/landingPlaylistDir/landingPlaylistDir.html',
        scope:{
          hplaylist: "=",
          dirmessage:"="
        },
        controller: ($scope, mainService) => {
          $scope.$watch('hplaylist', () => {
            // holds the playlist ID
            var hplaylist = $scope.hplaylist;

            if(hplaylist) {
              $scope.getHomePlaylist = (hplaylist) => {
                mainService.getHomePlaylist(hplaylist).then((response) => {
                  $scope.homePlaylistObj = response.items;
                  // ==== Create empty array to hold stats of all videos in playlist ====
                  $scope.videoStatsArr = [];
                  for(var i = 0; i < $scope.homePlaylistObj.length; i++) {
                    $scope.videoId = $scope.homePlaylistObj[i].snippet.resourceId.videoId;
                    const vidId = $scope.videoId

                    $scope.getVideoInfo = (vidId) => {

                      // ==== call the service to get statistics for each video in the playlist ====
                      mainService.getVideoInfo(vidId).then((response) => {
                        $scope.videoInfo = response.items[0];
                        // ==== If the id of video info matches the ID of the video in the playlist, push all info to videoStatsArr ====
                        if($scope.videoInfo.id == vidId) {
                          $scope.videoStatsArr.push($scope.videoInfo);
                          console.log($scope.videoStatsArr);
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
        }
      }
    });
//restrict with A,E, or AE
