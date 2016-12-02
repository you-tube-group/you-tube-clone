angular.module('you-tube-clone')
.directive('searchResultsDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchResultsDir/searchResultsDir.html',
    controller: ($scope, mainService) => {

      $scope.searchTerm = '';

      $scope.convertTime = (time) => {
        time = moment(time, "YYYYMMDD").fromNow();
        return time;
      };

      $scope.searchRequest = (searchTerm) => {

        mainService.getSearchResults(searchTerm)
        .then((response) => {
          $scope.searchResults = response;
          // console.log($scope.searchResults);
        })

        // Erases searchTerm after sending request
        // $scope.searchTerm = '';
      };


    //END OF CONTROLLER
    }
  //END OF RETURN (DIRECTIVE)
  }
})
