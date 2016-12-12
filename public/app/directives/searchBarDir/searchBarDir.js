angular.module('you-tube-clone')
.directive('searchBarDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchBarDir/searchBarDir.html',
    controller: ($scope, $state, $stateParams, mainService) => {

      $scope.searchTerm = $stateParams.search_query;
      $scope.hamSlider = false;

      $scope.searchRequest = (searchTerm) => {
        // mainService.getSearchResults(searchTerm)
        // .then((response) => {
        //   $scope.searchResults = response;
        //   // console.log($scope.searchResults);
        // })
        $state.go('searchResults', {search_query: searchTerm});
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


      // $('.night-mode-container').on("click", function(e) {
      //   console.log(e);
      //   $(e.currentTarget).css('color', 'green');
      //   $(e.currentTarget).css('background', 'red');
      //   $(e.currentTarget).css('border','0px #fff solid' );
      // });

      $('.night-mode-container').mouseenter(function (e) {
        $(e.currentTarget).css('color', 'yellow');
        $(e.currentTarget).css('background', 'rgba(22, 122, 198, 0.6)');
        $(e.currentTarget).css('border','0px #fff solid' );

        $(e.currentTarget).mouseleave(function(e) {
          $(e.currentTarget).css('color', '#ccc');
          $(e.currentTarget).css('background', '#f8f8f8');
          $(e.currentTarget).css('border','1px solid #ccc' );
        });
      })

// NOTE: night mode for home view
      $('.night-mode-container').on('click', function(e){
        $('body').css('background', '#345068');
        $(".search-bar-dir-outer-container").css('background', '#345068');
        $(".search-bar-dir-outer-container").css('border-bottom', 'solid 1px #7E8889');
        $(".home-view-main-wrapper").css('background', '#345068');
        $(".h-nav-container").css('border', "solid 1px #7E8889");
        $('.h-nav-container').css('background', '#5A666B');
        $('.h-trending').css('color', '#818C8C');
        $('.h-subscriptions').css('color', '#818C8C');
        $('.h-home').css('color', '#fff');
        $('.h-home').css('border-bottom', 'solid #9A1318 3px');
        $('.search-input').css('background', '#5A666B');
        $('.search-input').css('box-shadow', 'inset 0 0px 0px')
        $('.search-btn').css('background', '#7E8889');
        $('.search-icon').css('opacity', '100');
        $('.trending-video-wrapper').css('background', '#5B666C');
        $('.trending-video-wrapper').css('border-bottom', 'solid 1px rgb(112, 131, 148)')
        $('.trending-video-title').css('color', 'rgb(112, 151, 185)');
        $('.h-trending-video-wrapper').css('background', '#5B666C');
        $('.h-trending-video-wrapper').css('border-bottom', 'solid 1px rgb(112, 131, 148)')
        $('.trending-title').css('color', '#BDC6C1');
        $('.trending-channel-title').css('color', '#BDC6C1');
        $('.trending-view-count').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.dot-style').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.trending-publish').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.h-trending-video-wrapper').css('background', '#5B666C');
        $('.h-trending-video-wrapper').css('border-bottom', 'solid 1px rgb(112, 131, 148)')
        $('.h-trending-video-title').css('color', 'rgb(112, 151, 185)');
        $('.h-trending-title').css('color', '#BDC6C1');
        $('.h-trending-channel-title').css('color', '#BDC6C1');
        $('.h-trending-view-count').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.h-dot-style').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.h-trending-publish').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.channel-img').css('opacity', '.7');
        $('.yt-logo').css('opacity', '.7');
      })

      // $scope.nightMode = function() {
      //   $scope.night = {
      //     "background": "#345068", //background of search
      //     }
      // }
      //END OF CONTROLLER
    }
    //END OF RETURN OBJECT
  }
  //END OF DIRECTIVE
})
