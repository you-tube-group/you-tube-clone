angular.module('you-tube-clone')
  .directive('commentsDir', () => {
    return {
      restrict: 'E',
      templateUrl: './app/directives/commentsDir/commentsDir.html',
      scope: {
        vidId: '=',
        commentCount: '=',
        channelId: '='
      },
      controller: ($scope, mainService, $sce, $timeout) => {
        $scope.$watch('vidId', () => {
          var vidId = $scope.vidId;

          if(vidId) {
            $scope.getComments = (vidId) => {
              mainService.getComments(vidId).then((response) => {
                $scope.comments = response;
              })
            }
            $scope.getComments(vidId);
          }



          $scope.postComment = (comment, vidId, channelId) => {
            mainService.postComment(comment, vidId, channelId).then((response) => {
              $scope.newComment = response;

              $timeout(function() {
                $scope.getComments = (vidId) => {
                  mainService.getComments(vidId).then((response) => {
                    $scope.comments = response;
                  })
                }
                $scope.getComments(vidId);
              }, 1000)
            })
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
