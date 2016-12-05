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
                  $scope.homePlaylistObj = response;
                  console.log($scope.homePlaylistObj.items.length);
                  for(var i = 0; i < $scope.homePlaylistObj.items.length; i++) {
                    const vidId = $scope.homePlaylistObj.items[i].snippet.resourceId.videoId;
                    console.log('are we in the for loop?');
                    $scope.getVideoInfo = (vidId) => {
                      console.log('are we here?');
                      mainService.getVideoInfo(vidId).then((response) => {
                        $scope.videoInfo = response;
                        console.log('video info');
                        console.log(response);
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
