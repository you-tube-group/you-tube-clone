const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./controller/mainCtrl');
const massive = require('massive');
// const port = 3000;

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

// ======== Endpoints ========
app.get('/api/trending', controller.getTrending);
app.get('/api/watch', controller.getVideoInfo);
app.get('/api/comments' ,controller.getVideoComments);
app.get('/api/playList', controller.getPlaylistVideos);







const port = 8040;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
