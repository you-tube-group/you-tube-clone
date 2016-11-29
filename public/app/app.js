angular.module('you-tube-clone', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('video', {
      url:"/:videoId",
      templateUrl: './directives/videoPlayer.html'
    })





})
