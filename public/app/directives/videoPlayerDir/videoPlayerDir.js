angular.module('you-tube-clone')
.directive('videoPlayer', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/videoPlayerDir/videoPlayerDir.html',
    controller: ($scope, mainService, $interval, $stateParams, $sce) => {
      $scope.shareOn = false;
    //function for changing current video in service
    $scope.changeVideo = (video) => {
      mainService.newVideo = video;
    }

      const vidData = mainService.getTrending()
      .then((response) => {
        $scope.rawData = response;
      })


      $scope.singleVid = mainService.singleVid[0];

      const id = $stateParams.videoId;

      //get the video data for the clicked video
      $scope.getVideoInfo = function(id){
        mainService.getVideoInfo(id).then((response) => {
          $scope.videoInfo = response;

          $scope.videoId = response.items[0].id;
          $scope.videoUrl = "https://www.youtube.com/embed/" + $scope.videoId +
          "?autoplay=1&origin=http://example.com";
          $scope.thisUrl = $sce.trustAsResourceUrl($scope.videoUrl);

          // this specific variable holds the video info (ie title, and statistics)
          $scope.videoData = response.items[0];
          const reactionSum = ($scope.videoData.statistics.likeCount * 1) + ($scope.videoData.statistics.dislikeCount * 1);
          $scope.description = $scope.videoData.snippet.description;

          // get percent to adjust bar to show like/dislike ratio
          const percent = ($scope.videoData.statistics.likeCount / reactionSum) * 100;
          $('.myBar').css('width', percent + '%');

          var channelId = $scope.videoData.snippet.channelId;
          $scope.getChannelInfoOnVidPlayer = (channelId) => {
            mainService.getChannelInfoOnVidPlayer(channelId).then((response) => {
              $scope.channelInfo = response;

              $scope.channelData = response.items[0];
            })
          }
          $scope.getChannelInfoOnVidPlayer(channelId);
        })
      }
        $scope.getVideoInfo(id);
        $('.share-tab').on("click", function(){
          $(this).toggleClass('share-tab-border');
        });


        $(document).ready(function(e) {
            $('#share-button').on("click", function(e){
              $(this).css({
                borderBottom: '2px solid #CC181E',
                color: '#000'
              });
              $('#embed-button').css('border-bottom', '0 solid #fff');
              $('#email-button').css('border-bottom', '0 solid #fff');
            });

            $('#embed-button').on("click", function(e){
              $(this).css({
                borderBottom: '2px solid #CC181E',
                color: '#000'
              });
              $('#share-button').css('border-bottom', '0 solid #fff');
              $('#email-button').css('border-bottom', '0 solid #fff');
            });

            $('#email-button').on("click", function(e){
              $(this).css({
                borderBottom: '2px solid #CC181E',
                color: '#000'
              });
              $('#embed-button').css('border-bottom', '0 solid #fff');
              $('#share-button').css('border-bottom', '0 solid #fff');
            });



            $('.night-mode-container').on('click', function(e){

            })
        });

    }
  }






})
