angular.module('you-tube-clone')
.directive('playlistDir', () => {
 return {
   restrict: "E",
   templateUrl: './app/directives/playlistDir/playlistDir.html',
   controller: ($scope, mainService) => {

     $scope.getCurrentUser = () => {
       mainService.getCurrentUser().then((response) => {
         console.log('User on session (playlistDir)?: ');
         console.log(response);
         $scope.currentUser = response.data;
         const userInfo = $scope.currentUser;
         mainService.getCurrentUserPlaylist(userInfo).then((response) => {
           console.log("playlist array for user",response);
           $scope.userPlaylistVideos = response;
         })
       }).catch((err) => {
         $scope.currentUser = null;
       })
     }
     $scope.getCurrentUser();



    // $scope.getCurrentUserPlaylist = () => {
    //   var userInfo = $scope.currentUser;
    //   mainService.getCurrentUserPlaylist(userInfo).then((response) => {
    //     alert('im getting a response')
    //   })
    // }


     //END OF CONTROLLER
   }
 }



})
