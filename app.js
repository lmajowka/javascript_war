var express = require('express');
var app = express();
let glob = 1;
let logger = require('./logger');

app.use(express.static('public'));
app.use(logger);

let index = require('./routes/index');
app.use('/', index);

app.listen(3000);