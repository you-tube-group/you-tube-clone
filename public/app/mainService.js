angular.module('you-tube-clone')
.service('mainService', function($http) {

this.broken = 'working'

<<<<<<< HEAD
=======

>>>>>>> master
  this.getTrending = () => {
    return $http({
      method:'GET',
      url: '/trending'
    }).then((response) => {
      // console.log(response);
      return response.data;
    })
  }
  this.singleVid = [];
  this.passVideo = (video) => {
    this.singleVid[0] = video;
  }

<<<<<<< HEAD
=======
  this.newVideo = '';

>>>>>>> master
})
