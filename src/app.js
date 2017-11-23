var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/components'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/javascript'));

let index = require('./routes/index');
app.use('/', index);

app.use(express.static(__dirname + '/views'));

server.listen(3000);

io.on('connection', function (socket) {
  socket.on('movement', function (data) {
    console.log(data);
  });
});

