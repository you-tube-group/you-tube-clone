const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));




















const port = 8040;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
