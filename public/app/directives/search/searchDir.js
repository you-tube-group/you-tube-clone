angular.module('you-tube-clone')
  .directive('searchDir', () => {
    return {
      restrict: 'E',
      templateUrl: './app/directives/search/searchDir.html',
      controller: ($scope, mainService) => {
        $scope.getTrending = mainService.getTrending().then((response) => {
            $scope.trendingVids = response.data;
          })

        $scope.getTrending();
        $scope.message = 'hello';
      }
    }
  })
