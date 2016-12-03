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
                  console.log(response);
                })
              }
            }
            $scope.getHomePlaylist(hplaylist);
          })
        }
      }
    });
//restrict with A,E, or AE
