var Client = require('node-rest-client').Client;
var API_KEY = require('../config').API_KEY;

var client = new Client();

module.exports = {

  getTrending: function(req,res,next) {
    client.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=25&key=${API_KEY}`, function(data, response) {
      res.status(200).json(data);
    });
  }

  // retrieve info for single video
  getVideoInfo: function(req,res,next) {
    var videoId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`, function(data, response) {
      res.status(200).json(data);
    });
  }
}
