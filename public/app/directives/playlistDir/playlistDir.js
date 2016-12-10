angular.module('you-tube-clone')
.directive('playlistDir', () => {
 return {
   restrict: "E",
   templateUrl: './app/directives/playlistDir/playlistDir.html',
   controller: ($scope, mainService) => {

     const getPlaylist = ()=> {
       mainService.getPlaylist()
       .then((response) => {
         $scope.playlist = response
       })
     }


     //END OF CONTROLLER
   }
 }



})
