angular.module('you-tube-clone', ['ui.router', 'ngSanitize'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('landing', {
    templateUrl: './app/views/homeView.html',
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


})
