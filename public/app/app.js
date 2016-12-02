angular.module('you-tube-clone', ['ui.router', 'ngSanitize'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('landing', {
    url: '/'
  })
  .state('trending', {
    url: '/trending',
    templateUrl: './app/views/trendingView.html'
  })
  .state('video', {
    url:"/watch/:videoId",
    templateUrl: './app/views/videoPlayer.html'
  })
  .state('searchResults', {
    url:"/searchResults",
    templateUrl: './app/views/searchResults.html'
  })


})
