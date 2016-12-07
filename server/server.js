const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const secret = require('./secret');
// const port = 3000;

//===INITIALIZE EXPRESS APP======
const app = module.exports = express();

//===MIDDLEWARE=======
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));


//===CONNECT TO SERVER=========
// const massiveServer = massive.connectSync({
//   connectionString: 'postgress://localhost/yt-local-auth'
// });
// app.set('db', massiveServer);
// const db = app.get('db');


// //===REQUIRED CONTROLLERS====
const controller = require('./controller/mainCtrl');
const usersCtrl = require('./controller/usersCtrl');

//===REQUIRE PASSPORT========
const passport = require('./passport');

//===POLICIES=================

// const isAuthed = (req,res,next) => {
//   if (!req.isAuthenticated()) return res.status(401).send();
//   return next();
// }
//
// //===SESSION AND PASSPORT===============
// app.use(session({
//   secret: secret.secret,
//   saveUninitialized: false,
//   resave: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());



// ======== Endpoints ========
app.get('/api/trending', controller.getTrending);
app.get('/api/watch', controller.getVideoInfo);
app.get('/api/comments', controller.getVideoComments);
app.get('/api/playList', controller.getPlaylistVideos);
app.get('/api/search', controller.getSearchResults);
app.get('/api/channelInfo', controller.getChannelInfoOnVidPlayer);
app.get('/api/channelHoverInfo', controller.getChannelHoverInfo);
app.get('/api/playlistInfo', controller.getPlaylistInfo);



//========= AUTH ENDPOINTS ======
// app.post('/register', usersCtrl.registerUser);
//=================================



const port = 8040;
app.listen(port, () => {
    console.log('Listening on port: ' + port);
})
