angular.module('you-tube-clone')
.controller('mainCtrl', function($scope, mainService) {

  $scope.broken = mainService.broken;

  $scope.playlistIds = [
     "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
    "PL8fVUTBmJhHJlT40aNl_cX4qcrVqoC5eg"
  ]
  // $scope.playlistIds = [
  //    "UC-9-kyTW8ZkZNDHQJ6FgpwQ", //music:
  //   "UCEgdi0XIXXZ-qJOFPf4JSKw",  //sports:
  //    "UCOpNcN46UbXVtpKMrmU4Abg", //gaming:
  //    "UClgRkhTL3_hImCAmdLfDE4g", //movies:
  //    "UCl8dMTqDrJQ0c8y23UBu4kQ", //tvShows:
  //    "UCYfdidRxbB8Qhf0Nx7ioOYw", //news:
  //    "UC4R8DWoMoI7CAwX8_LjQHig", //live:
  //    "UCBR8-60-B28hp2BmDPdntcQ", //spotlight:
  //    "UCzuqhhs6NWbgTzMuM09WKDQ" //360:
  // ]
  // $scope.landingPlaylists = [];
  // $scope.playLists = () => {
  //   mainService.getPlaylist($scope.channelIds.music).then((response) => {
  //     console.log('got music playlist');
  //     console.log(response);
  //     $scope.landingPlaylists.push(response);
  //     mainService.getPlaylist().then((response) => {
  //       $scope.landingPlaylists.push(response);
  //       console.log('got sports playlist');
  //       console.log(response);
  //       console.log($scope.landingPlaylists);
  //     })
  //   })
  // }

})
