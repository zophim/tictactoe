var express = require('express');
var path = require('path');
var engine = require('express-dot-engine');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var index = require('./routes/index.js');
var game  = require('./routes/game.js');

//configure app
app.engine('dot', engine.__express);
app.set('view engine', 'dot');
app.set('views', path.join(__dirname, './views'));

//use middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

//set routes
app.use('/', index);
app.use('/game/', game);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
