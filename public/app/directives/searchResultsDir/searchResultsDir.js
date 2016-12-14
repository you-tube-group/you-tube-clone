angular.module('you-tube-clone')
.directive('searchResultsDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchResultsDir/searchResultsDir.html',
    scope: {
      searchResults: '='
    },
    controller: ($scope, $timeout, mainService, $stateParams) => {

      $scope.channelHover = false;

      $scope.convertTime = (time) => {
        time = moment(time, "YYYYMMDD").fromNow();
        return time;
      };

      $scope.roundSubs = function(displaySubs) {
        var newNum;
        if (displaySubs > 1000000) {
          newNum = Math.floor(displaySubs/1000000) + "M";
          return newNum;
        } else if (displaySubs > 1000 && displaySubs < 1000000) {
          newNum = Math.floor(displaySubs/1000) + "K";
          return newNum;
        } else {
          return displaySubs;
        }
      }

      $scope.showChannelHover = (id) => {
        $scope.hovering = true;
        if (!id) {
          return false
        } else {
          mainService.getChannelHoverInfo(id)
          .then((response) => {
            // console.log(response);
            response.statistics.subscriberCount = $scope.roundSubs(response.statistics.subscriberCount);
            $scope.channelInfo = response;
          })

          var x = event.pageX;
          var y = event.pageY;
          // console.log(x,y);
          $scope.hoverPosition = {
            "top" : y + "px",
            "left" : x + "px",
          }
          $timeout(function () {
            if ($scope.hovering === true) {
              $scope.channelHover = true;
            }
          }, 1000);
        }
      }

      $scope.keepHovering = () => {
        $scope.hovering = true
        $scope.channelHover = true;
      }

      $scope.hideChannelHover = function() {
        $scope.hovering = false;
        $scope.channelHover = false;
      }

    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
