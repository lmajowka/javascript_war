var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/components'));
app.use(express.static(__dirname + '/css'));

let index = require('./routes/index');
app.use('/', index);

app.use(express.static(__dirname + '/views'));

app.listen(3000);