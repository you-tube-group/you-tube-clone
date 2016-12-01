var Client = require('node-rest-client').Client;
var Axios = require('axios');
var API_KEY = require('../config').API_KEY;
const ytSearch = require('youtube-search');


var client = new Client();

module.exports = {

    getTrending: function(req, res, next) {
        client.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=US&maxResults=25&key=${API_KEY}`, function(data, response) {
            res.status(200).json(data);
        });
    },

  // retrieve info for single video
  getVideoInfo: function(req,res,next) {
    var videoId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`, function(data, response) {
      res.status(200).json(data);
    });
  },

  // retrieves comment thread for selected video
  getVideoComments: function(req,res,next) {
    var videoId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=replies,snippet&order=relevance&key=${API_KEY}&videoId=${videoId}`, function(data, response) {
      res.status(200).json(data);
    });
  },

  // retrieves videos in a playList based on playList id
  getPlaylistVideos: function(req,res,next) {
    var playListId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playListId}&key=${API_KEY}`, function(data, response) {
      res.status(200).json(data);
    });
  },



//
// getSearchResults: (req,res,next) => {
//   var searched = req.query.searched;
//   client.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searched}&key=${API_KEY}`, function(data, response){
//     res.status(200).json(data);
//   });
// }
// https://www.googleapis.com/youtube/v3
  // retrieves results from user's search bar request
  getSearchResults: (req,res,next) => {
    var opts = {
      maxResults: 25,
      key: API_KEY,
    };
    var videoIdArray = [];
    ytSearch(req.query.searched, opts, (err, results) => {
      if (err) return console.log(err);
      // console.log(results);
      for(var i = 0; i < results.length; i++){
        videoIdArray.push(results[i].id);
      };
      videoIdArray = videoIdArray.join(',')
      console.log('this is the video array',videoIdArray);

      // client.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoIdArray}&key=${API_KEY}&part=statistics`, function(err, response){
      //   console.log(response.items);
      //   res.send(response.items);
      // });

      Axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoIdArray}&key=${API_KEY}&part=statistics`).then(function(response){
        console.log("RESPONSE: ", response.data.items.length);
        console.log(results.length);
        var j = 0;
        for(var i = 0; i < results.length; i++){
          // console.log(i);
          if (results[i].kind === "youtube#video") {
            results[i].viewCount = response.data.items[j].statistics.viewCount;
            j++;
          }
          // if (results[i].kind === "youtube#channel") {
          //   Axios.get(`sdiufsdifsdjiofjoisdfjoisdjiofjoisdfjiosiofjoisf`).then
          //     results[i].numVideos = response.data.items[j].statistics.viewCount;
          // }

        };
        // res.send({statistics: response.data.items, results: results});
        res.send(results);
      })
      .catch(function (error){
        console.log("ERROR: ", error);
      });

    });

  }

}
