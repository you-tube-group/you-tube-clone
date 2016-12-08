angular.module('you-tube-clone')
.directive('searchResultsDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchResultsDir/searchResultsDir.html',
    controller: ($scope, $timeout, mainService) => {

      $scope.searchTerm = '';
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
        if (!id) {
          return false
        } else {
          mainService.getChannelHoverInfo(id)
          .then((response) => {
            console.log(response);
            response.statistics.subscriberCount = $scope.roundSubs(response.statistics.subscriberCount);
            $scope.channelInfo = response;
          })

          var x = event.pageX;
          var y = event.pageY;
          // console.log(x,y);
          $scope.hoverPosition = {
            "top" : y + 15 + "px",
            "left" : x + 10 + "px",
          }
          $timeout(function () {
            $scope.channelHover = true;
          }, 1000);
        }
      }

      $scope.hideChannelHover = () => {
        $scope.channelHover = false;

      }



      // $scope.searchRequest = (searchTerm) => {
      //   mainService.getSearchResults(searchTerm)
      //   .then((response) => {
      //     $scope.searchResults = response;
      //     // console.log($scope.searchResults);
      //   })
      //
      //   // Erases searchTerm after sending request
      //   // $scope.searchTerm = '';
      // };


    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
