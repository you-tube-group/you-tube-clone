angular.module('you-tube-clone')
.directive('searchDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchDir.html',
    controller: ($scope, mainService) => {
      const vidData = mainService.getTrending()
      .then((response) => {
        $scope.rawData = response;
      })
    }
  }






})
