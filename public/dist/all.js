'use strict';

angular.module('you-tube-clone', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {});
'use strict';

angular.module('you-tube-clone').controller('mainCtrl', function ($scope, mainService) {

  $scope.broken = mainService.broken;
});
'use strict';

angular.module('you-tube-clone').service('mainService', function ($http) {

  this.broken = 'working';
});