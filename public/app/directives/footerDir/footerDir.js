angular.module('you-tube-clone')
.directive('footerDir', () => {
  return {
    restrict: 'E',
    templateUrl: './app/directives/footerDir/footerDir.html',
    controller: ($scope, mainService) => {

    }
  }
})
