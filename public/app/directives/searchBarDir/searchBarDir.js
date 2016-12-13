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
// NOTE: Work on the loading progress bar!!!!

// NOTE: Add time feature to turn on the night mode a certain time.
// NOTE: make the night mode button into a toggle switch
// NOTE: create 6 color options for night mode, look at atom themes
// NOTE: Create a function that is an "if" statment for wheather night mode is on or off.
// NOTE: a warning in advance about when night mode will turn on.
// NOTE: option for NEVER night mode
// NOTE: night mode for home view: BLUE
      $('.night-mode-container').on('click', function(e){
        $(this).css('color', 'yellow');
        $(this).css('background', 'rgba(22, 122, 198, 0.6)');
        $(this).css('border', '0px #fff solid');

        $('.you-tube-icons').css('background', 'url("./../../../Images/yt-logo-white.svg"');


        $('body').css('background', 'rgb(23, 38, 52)');
        $(".search-bar-dir-outer-container").css('background', 'rgb(23, 38, 52)');
        $(".search-bar-dir-outer-container").css('border-bottom', 'solid 1px rgb(74, 81, 82)');
        $(".home-view-main-wrapper").css('background', 'rgb(23, 38, 52)');
        $(".h-nav-container").css('border', "solid 1px rgb(74, 81, 82)");
        $('.h-nav-container').css('background', 'rgb(54, 60, 63)');
        $('.h-trending').css('color', '#818C8C');
        $('.h-subscriptions').css('color', '#818C8C');
        $('.h-home').css('color', '#fff');
        $('.h-home').css('border-bottom', 'solid #9A1318 3px');
        $('.search-input').css('background', '#363C3F');
        $('.search-input').css('box-shadow', 'inset 0 0px 0px')
        $('.search-btn').css('background', '#7E8889');
        $('.search-icon').css('opacity', '100');
        $('.trending-video-wrapper').css('background', 'rgb(54, 60, 63)');
        $('.trending-video-wrapper').css('border-bottom', 'solid 1px rgb(74, 81, 82)')
        $('.trending-video-title').css('color', 'rgb(64, 111, 152)');
        $('.h-trending-video-wrapper').css('background', 'rgb(54, 60, 63)');
        $('.h-trending-video-wrapper').css('border-bottom', 'solid 1px rgb(74, 81, 82)')
        $('.trending-title').css('color', '#BDC6C1');
        $('.trending-channel-title').css('color', '#BDC6C1');
        $('.trending-view-count').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.dot-style').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.trending-publish').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.h-trending-video-wrapper').css('background', 'rgb(54, 60, 63)');
        $('.h-trending-video-wrapper').css('border-bottom', 'solid 1px rgb(74, 81, 82)')
        $('.h-trending-video-title').css('color', 'rgb(64, 111, 152)');
        $('.h-trending-title').css('color', '#BDC6C1');
        $('.h-trending-channel-title').css('color', '#BDC6C1');
        $('.h-trending-view-count').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.h-dot-style').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.h-trending-publish').css('color', 'rgba(21, 38, 52, 0.67)');
        $('.channel-img').css('filter', 'grayscale(60%)');
        // $('.yt-logo').css('filter', 'grayscale(60%)');
        $('.upload-btn').css('color', '#fff');
        $('.upload-btn').css('background', '#152634')
        $('upload-btn').css('border', '1px solid #152634');
      })

      // $scope.nightMode = function() {
      //   $scope.night = {
      //     "background": "rgb(33, 55, 74)", //background of search
      //     }
      // }
      //END OF CONTROLLER
    }
    //END OF RETURN OBJECT
  }
  //END OF DIRECTIVE
})
