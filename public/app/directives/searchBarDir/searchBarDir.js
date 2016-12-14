angular.module('you-tube-clone')
.directive('searchBarDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/searchBarDir/searchBarDir.html',
    controller: ($scope, $state, $stateParams, mainService) => {

      $scope.night = false;

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
  $(document).ready(function(){

      $('.search-bar-dir-outer-container').hover(function() {
        $('.ham-icon').css({"height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -469px -74px", "background-size": "auto"});
      }, function() {
        $('.ham-icon').css({"height": "16px", "width": "16px", "background": "no-repeat url('../images/you-tube-icons.webp') -696px -258px", "background-size": "auto"});
      });



// NOTE: Add time feature to turn on the night mode a certain time.
// NOTE: make the night mode button into a toggle switch
// NOTE: create 6 color options for night mode, look at atom themes
// NOTE: Create a function that is an "if" statment for wheather night mode is on or off.
// NOTE: a warning in advance about when night mode will turn on.
// NOTE: option for NEVER night mode
// NOTE: night mode for home view: BLUE

      $('.night-mode-container').on('click', function(e){
        $scope.night = !$scope.night;

        if ($scope.night === true) {

          $('.home-view-main-wrapper').css('background', '#101010');
          $('.trending-video-wrapper, .h-nav-container, .search-bar-dir-outer-container, .h-trending-video-wrapper').css('background', '#1E1E1E');
          $('.trending-video-title, .h-trending-video-title').css('color', 'rgb(103, 131, 171)');
          $('.trending-channel-title, .trending-view-count, .dot-style, .trending-publish').css('color', '#909090');
          $('.search-input').css('background', '#3E3E3E');
          $('.search-btn, .night-mode-container, .upload-btn, .signin-btn').css('background', '#343434');
          $('.night-mode-container').css('border', '1px solid #343434');
          $('.night-mode-container').css('color', 'rgba(255, 255, 0, 0.58)');
          $('.upload-btn, .signin-btn, .right-arrow-container, .h-right').css('color', '#B0B0B0');
          $('.search-icon').css('color', '#767676');
          $('.search-bar-dir-outer-container, .h-nav-container, .trending-video-wrapper, .h-trending-video-wrapper, .search-input, .search-btn, .upload-btn').css('border', '1px solid #3E3E3E');
          $('.search-input').css('box-shadow', 'inset 0 0px 0px');
          $('.h-home, .trending-title, .channel-title').css('color', '#979797');
          $('.right-arrow-container, .h-right-arrow-container').css('color', '#B0B0B0');
          $('.right-arrow-container, .left-arrow-container, .h-left-arrow-container, .h-right-arrow-container').css('background', '#1e1e1e');
          $(e.currentTarget).mouseenter(function(e) {
            $(e.currentTarget).css('color', '#ccc');
            $(e.currentTarget).css('background', '#f8f8f8');
            $(e.currentTarget).css('border','1px solid #ccc' );
          });
          $('.night-mode-container').mouseleave(function (e) {
            $(e.currentTarget).css('background', '#343434');
            $(e.currentTarget).css('border', '1px solid #343434');
            $(e.currentTarget).css('color', 'rgba(255, 255, 0, 0.58)');
          });
          $('.right-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#6f6f6f",
                "background": "#343434",
                "box-shadow": "1px 0px 1.5px 1px #343434"
              });
          });
          $('.right-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#B0B0B0",
                "background": "#1E1E1E",
                "box-shadow": ""
              });
          });
          $('.h-right-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#6f6f6f",
                "background": "#343434",
                "box-shadow": "1px 0px 1.5px 1px #343434"
              });
          });
          $('.h-right-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#B0B0B0",
                "background": "#1E1E1E",
                "box-shadow": ""
              });
          });
          $('.left-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#6f6f6f",
                "background": "#343434",
                "box-shadow": "1px 0px 1.5px 1px #343434"
              });
          });
          $('.left-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#B0B0B0",
                "background": "#1E1E1E",
                "box-shadow": ""
              });
          });
          $('.h-left-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#6f6f6f",
                "background": "#343434",
                "box-shadow": "1px 0px 1.5px 1px #343434"
              });
          });
          $('.h-left-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#B0B0B0",
                "background": "#1E1E1E",
                "box-shadow": ""
              });
          });
          } else if ($scope.night === false) {
            $('.home-view-main-wrapper').css('background', '#f1f1f1');
            $('.trending-video-wrapper, .h-nav-container, .search-bar-dir-outer-container, .h-trending-video-wrapper').css('background', '#fff');
            $('.trending-title, .channel-title').css('color', '#333333');
            $('.trending-video-title, .h-trending-video-title').css('color', 'rgb(22, 122, 198)');
            $('.trending-channel-title, .trending-view-count, .dot-style, .trending-publish').css('color', '#767676');
            $('.search-input').css('background', '#fff');
            $('.search-btn, .night-mode-container, .upload-btn').css('background', '#f8f8f8');
            $('.signin-btn').css('background', '#167AC6');
            $('.signin-btn').css('color', '#fff');
            $('.search-bar-dir-outer-container, .h-nav-container, .search-input, .search-btn, .upload-btn, .night-mode-container').css('border', '1px solid #C8C8C8');
            $('.trending-video-wrapper, .h-trending-video-wrapper').css({"border": "", "border-bottom": "1px solid #C8C8C8"});
            $('.h-home').css('color', '#000');
            $('.right-arrow-container, .left-arrow-container, .h-left-arrow-container, .h-right-arrow-container').css('background', '#fff');
          $('.night-mode-container').mouseenter(function (e) {
            $(e.currentTarget).css('background', '#343434');
            $(e.currentTarget).css('border', '1px solid #343434');
            $(e.currentTarget).css('color', 'rgba(255, 255, 0, 0.58)');
          });

          $(e.currentTarget).mouseleave(function(e) {
            $(e.currentTarget).css('color', '#ccc');
            $(e.currentTarget).css('background', '#f8f8f8');
            $(e.currentTarget).css('border','1px solid #ccc' );
          });
          $('.right-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#000",
                "background": "#fff",
                "box-shadow": "1px 0px 1.5px 1px #C8C8C8"
              });
          });
          $('.right-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#C8C8C8",
                "background": "#fff",
                "box-shadow": ""
              });
          });
          $('.h-right-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#6f6f6f",
                "background": "#fff",
                "box-shadow": "1px 0px 1.5px 1px #C8C8C8"
              });
          });
          $('.h-right-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#B0B0B0",
                "background": "",
                "box-shadow": ""
              });
          });
          $('.left-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#000",
                "background": "#fff",
                "box-shadow": "-1px 0px 1.5px 1px #C8C8C8"
              });
          });
          $('.left-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#C8C8C8",
                "background": "#fff",
                "box-shadow": ""
              });
          });
          $('.h-left-arrow-container').mouseenter(function(event) {
              $(this).css({
                "color": "#6f6f6f",
                "background": "#fff",
                "box-shadow": "-1px 0px 1.5px 1px #C8C8C8"
              });
          });
          $('.h-left-arrow-container').mouseleave(function(event) {
              $(this).css({
                "color": "#B0B0B0",
                "background": "#fff",
                "box-shadow": ""
              });
          });
        }
      })
    }); //<--END OF jQuery
      //END OF CONTROLLER
    }
    //END OF RETURN OBJECT
  }
  //END OF DIRECTIVE
})


// NOTE: Color scheme for nightMode

// $black1: #101010; // main background
// $black2: #1E1E1E; // secondary background
// $black3: #2E2E2E; // carousel button
// $black4: #3E3E3E; // search background
// $black5: #343434; // search-button background
// $black6: #767676; // search-placeholder color
// $videoTitleBlue: #6783AB; // primary video title
// $videoSubTitle: #909090: //font of video sub-description
// $uploadSignIn: #B0B0B0; //font color for upload and sign in
