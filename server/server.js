const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller/mainCtrl');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

// ======== Endpoints ========
app.get('/trending', controller.getTrending);



















const port = 8040;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
