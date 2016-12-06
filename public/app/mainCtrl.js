angular.module('you-tube-clone')
.controller('mainCtrl', function($scope, mainService) {

  $scope.broken = mainService.broken;

  $scope.playlistIds = [
    {id: "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI", img: "./images/ham-bar-slide-out-images/category-music.jpg"},
    {id: "PL8fVUTBmJhHJlT40aNl_cX4qcrVqoC5eg", img: "./images/ham-bar-slide-out-images/category-sports.jpg"},
    {id: "PLiCvVJzBupKnXepW_381ILaaxaxK33vOv", img: "./images/ham-bar-slide-out-images/category-gaming.jpg"},
    {id: "PLzjFbaFzsmMT_VuMSVQxfkQIw7VNbHyVi", img: "./images/ham-bar-slide-out-images/category-movies.jpg"},
    {id: "PLg8RSSmVAw_Gk0qfrDMfOQ8k7gVdfKliP", img: "./images/ham-bar-slide-out-images/category-tv.jpg"},
    {id: "PLU12uITxBEPHOJO1FU8qll6gQmKcXp5S7", img: "./images/ham-bar-slide-out-images/category-live.jpg"},
    {id: "PL3ZQ5CpNulQldOL3T8g8k1mgWWysJfE9w", img: "./images/ham-bar-slide-out-images/category-news.jpg"},
    {id: "PLbpi6ZahtOH7vgyGImZ4P-olTT11WLkLk", img: "./images/ham-bar-slide-out-images/category-spotlight.jpg"},
    {id: "PLU8wpH_Lfhmsn0qJmVSyEXB9m3j1OkJWX", img: "./images/ham-bar-slide-out-images/category-threesixty.jpg"}
  ]
  // $scope.channelImages = [
  //   "./images/ham-bar-slide-out-images/category-music.jpg" , //music:
  //   "./images/ham-bar-slide-out-images/category-sports.jpg",  //sports:
  //    "./images/ham-bar-slide-out-images/category-gaming.jpg", //gaming:
  //    "./images/ham-bar-slide-out-images/category-movies.jpg", //movies:
  //    "./images/ham-bar-slide-out-images/category-tv.jpg", //tvShows:
  //    "./images/ham-bar-slide-out-images/category-news.jpg", //news:
  //    "./images/ham-bar-slide-out-images/category-live.jpg", //live:
  //    "./images/ham-bar-slide-out-images/category-spotlight.jpg", //spotlight:
  //    "./images/ham-bar-slide-out-images/category-threesixty.jpg" //360:
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
