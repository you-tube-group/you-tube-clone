angular.module('you-tube-clone')
.directive('searchBarDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchBarDir/searchBarDir.html',
    controller: ($scope, mainService) => {

      $scope.searchTerm = '';
      $scope.hamSlider = false;

      $scope.searchRequest = (searchTerm) => {
        mainService.getSearchResults(searchTerm)
        
        // Erases searchTerm after sending request
        // $scope.searchTerm = '';
      }

      $scope.openHamSlide = () => {
        if (!$scope.hamSlider) {
          $scope.hamSlider = true;
        } else {
          $scope.hamSlider = false;
        };
      };

      $('.search-bar-dir-outer-container').hover(() => {
        $('.ham-icon').css({"height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -469px -74px", "background-size": "auto"});
      }, () => {
        $('.ham-icon').css({"height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -696px -258px", "background-size": "auto"});
      });





    }
  }






})
