angular.module('you-tube-clone', ['ui.router', 'ngSanitize'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider 
  .state('landing', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  })
  .state('trending', {
    url: '/trending',
    templateUrl: './app/views/trendingView.html'
  })
  .state('video', {
    url:"/watch/:videoId",
    templateUrl: './app/views/videoPlayer/videoPlayer.html'
  })
  .state('searchResults', {
    url:"/searchResults",
    templateUrl: './app/views/searchResults.html'
  })
  .state('auth', {
    url: '/sign-in',
    templateUrl: './app/views/signInView.html'
  })


})
