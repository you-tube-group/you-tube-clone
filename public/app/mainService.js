angular.module('you-tube-clone')
.service('mainService', function($http, $state) {

this.broken = 'working'

  this.getTrending = () => {
    return $http({
      method:'GET',
      url: '/api/trending'
    }).then((response) => {
      // console.log('hello from the mainnService',response);
      return response.data;
    })
  }
  this.singleVid = [];
  this.passVideo = (video) => {
    this.singleVid[0] = video;
  }

  this.getVideoInfo = (id) => {
    return $http({
      method: 'GET',
      url: `/api/watch/?id=${id}`
    }).then((response) => {
      return response.data;
    })
  }

  this.getComments = (id) => {

    return $http({
      method: 'GET',
      url: `/api/comments/?id=${id}`
    }).then((response) => {

      return response.data;
    })
  }

  this.getSearchResults = (searched) => {
    // console.log("searched: ", searched);
    // searched = searched + '';
    searched = searched.replace(/ /g,"%20");
    return $http({
      method: 'GET',
      url: '/api/search?searched=' + searched
    }).then((response) => {
      console.log("From the mainService: ",response.data);
      return response.data;
    })
  }

  this.getChannelInfoOnVidPlayer = id => {
    return $http({
      method:'GET',
      url: `/api/channelInfo/?id=${id}`
    }).then((response) => {
      return response.data;
    })
  }

  this.getHomePlaylist = (id) => {
    return $http({
      method: 'GET',
      url: `/api/playList/?id=${id}`
    }).then((response) => {
      return response.data;
    })
  }

  this.getChannelHoverInfo = (id) => {
    return $http({
      method: 'GET',
      url: `/api/channelHoverInfo/?id=${id}`
    }).then((response) => {
      return response.data.items[0];
    })
  }


  this.getPlaylistInfo = (id) => {
    return $http({
      method: 'GET',
      url: `/api/playlistInfo/?playlistId=${id}`
    }).then((response) => {
      return response.data;
    })
  }

  this.getPlaylist = () => {
    return $http({
      method: 'GET',
      url: "/api/user-playlist"
    }).then((response) => {
      return response.data;
    })
  }

  this.registerUser = (user) => {
    return $http({
      method: 'POST',
      url: '/register',
      data: user
    }).then((response) => {
      return response;
    });
  };

  this.getCurrentUser = () => {
    return $http({
      method: 'GET',
      url: '/me'
    })
  };

  this.addToPlaylist = (video, user) => {
    console.log('authService video and user: ', video, user);
    return $http({
      method: "POST",
      url: "/api/addVideo",
      data: {
        video: video,
        user: user
      }
    })
  }










})
