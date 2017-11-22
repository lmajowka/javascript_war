var express = require('express');
var app = express();
let glob = 1;
let logger = require('./logger');
var path = require('path');

app.use(express.static('components'));
app.use(logger);

let index = require('./routes/index');
app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'slm');

app.use(express.static(__dirname + '/views'));

app.listen(3000);