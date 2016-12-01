angular.module('you-tube-clone', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './app/views/homeView.html'
            })
            .state('trending', {
                url: '/trending',
                templateUrl: './app/views/trendingView.html'
            })
            .state('video', {
                url: "/:videoId",
                templateUrl: './app/views/videoPlayer.html'
            })

    })
