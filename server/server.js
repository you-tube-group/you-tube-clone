const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const secret = require('./secret');
const config = require('./config');
const passport = require('passport');

const YouTubeStrategy = require('passport-youtube-v3').Strategy;
const base = 'https://www.googleapis.com/youtube/v3';
const google = require('googleapis');
const youtube = google.youtubeAnalytics('v1');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(config.GOOGLE_CLIENT_ID, config.GOOGLE_CLIENT_SECRET, config.callbackURL);
// const port = 3000;

//===INITIALIZE EXPRESS APP======
const app = module.exports = express();

//===MIDDLEWARE=======
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));
app.use(cors());

//===REQUIRE PASSPORT========
app.use(passport.initialize());
app.use(passport.session());


//===CONNECT TO SERVER=========
const massiveServer = massive.connectSync({
  connectionString: 'postgress://localhost/yt-local-auth' // TODO: ELEPHANT / TINYTURTLE
});
app.set('db', massiveServer);
const db = app.get('db');


// //===REQUIRED CONTROLLERS====
const controller = require('./controller/mainCtrl');
const usersCtrl = require('./controller/usersCtrl');

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

//YOUTUBE PASSPORT STUFF
passport.use(new YouTubeStrategy({
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.callbackURL,
        scope: ['https://www.googleapis.com/auth/youtube.readonly']
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('access token: ', accessToken);
        sessionStorage.setItem('accessToken', accessToken);
        console.log('profile: ', profile);
        if (profile === false) {
            return done(null, {
                profile: profile
            });
        }

        oauth2Client.setCredentials({
            access_token: accessToken,
            refresh_token: refreshToken
        });
        // db.users.findOne({youtube_id: profile.id}, (err, user) => {
        db.findOne([profile.id], (err, user) => {
            console.log("USER FOUND: ", user);
            if (!user) {
              // db.users.insert({youtube_id: profile.id}, (error, newUser) => {
              console.log('joe it is working. BRIAN');
              db.insert([profile.id, profile.displayName], (error, newUser) => {
                console.log('newUser: ', newUser);
                return done(null, newUser);
              });
            }
            return done(null, user);
        });
    }
));



// ======== Endpoints ========
app.get('/auth/', passport.authenticate('youtube'));
app.get('/auth/callback', passport.authenticate('youtube', {
    failureRedirect: '/auth'
}));

app.get('/login', (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log('is authed');
        return res.redirect('/#/dashboard')
    }
    console.log('is not authed');
    return res.redirect('/auth'); //redirects user to app.get('/login')
});

app.get('/authCheck', (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.send({
            loggedin: true
        })
    } else {
        return res.send({
            loggedin: false
        });
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((e) => {
        req.logout();
        res.redirect('/');
    })
})

passport.serializeUser((user, done) => {
    done(null, user); // put the whole user object from YouTube on the sesssion;
    console.log('user on passport session: ', user);
});

passport.deserializeUser((obj, done) => {
    //Only do something here that needs to be done with every request
    done(null, obj); // get data from session and put it on req.user in every endpoint;
});

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
