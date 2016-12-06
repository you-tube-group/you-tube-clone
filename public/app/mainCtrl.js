angular.module('you-tube-clone')
.controller('mainCtrl', function($scope, mainService) {

  $scope.broken = mainService.broken;

  $scope.playlistIds = [
     "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
    "PL8fVUTBmJhHJlT40aNl_cX4qcrVqoC5eg",
    "PLiCvVJzBupKnXepW_381ILaaxaxK33vOv",
    "PLzjFbaFzsmMT_VuMSVQxfkQIw7VNbHyVi",
    "PLg8RSSmVAw_Gk0qfrDMfOQ8k7gVdfKliP",
    "PLU12uITxBEPHOJO1FU8qll6gQmKcXp5S7",
    "PL3ZQ5CpNulQldOL3T8g8k1mgWWysJfE9w",
    "PLbpi6ZahtOH7vgyGImZ4P-olTT11WLkLk",
    "PLU8wpH_Lfhmsn0qJmVSyEXB9m3j1OkJWX"
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
