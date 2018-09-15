
const express = require('express');
const cookieParser = require('cookie-parser');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(cookieParser());

app.use('/static', express.static(path.join(__dirname, 'public')));

require('./routes/index')(app);

app.listen(4000, function(){
  console.log('connect success!');
});
