angular.module('you-tube-clone')
  .directive('commentsDir', () => {
    return {
      restrict: 'E',
      templateUrl: './app/directives/commentsDir/commentsDir.html',
      scope: {
        vidId: '='
      },
      controller: ($scope, mainService, $sce) => {
        $scope.$watch('vidId', () => {
          var vidId = $scope.vidId;

          if(vidId) {
            $scope.getComments = (vidId) => {
              mainService.getComments(vidId).then((response) => {
                console.log('comments obj');
                console.log(response);
                $scope.comments = response;
              })
            }
            $scope.getComments(vidId);
          }
        })

        $scope.commentTime = (dateObj)=> {
          dateObj = moment(dateObj, 'YYYYMMDD').fromNow();
          return dateObj;
        }



      //end of controller
      }
    }
  })
