angular.module('you-tube-clone')
.directive('searchResultsDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchResultsDir/searchResultsDir.html',
    controller: ($scope, mainService) => {

      $scope.searchTerm = '';
      $scope.channelHover = false;

      $scope.convertTime = (time) => {
        time = moment(time, "YYYYMMDD").fromNow();
        return time;
      };


      $scope.showChannelHover = (id) => {
        if (!id) {
          return false
        } else {
          mainService.getChannelHoverInfo(id)
          .then((response) => {
            console.log(response);
            $scope.channelInfo = response;
          })


          var x = event.pageX;
          var y = event.pageY;
          // console.log(x,y);
          $scope.hoverPosition = {
            "top" : y + 15 + "px",
            "left" : x + 10 + "px",
          }
          $scope.channelHover = true;
        }
      }

      // $scope.hideChannelHover = () => {
      //   $scope.channelHover = false;
      //
      // }



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
