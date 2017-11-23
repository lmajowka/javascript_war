class Socket{

  constructor(server){
    var io = require('socket.io')(server);
    
    io.on('connection', function (socket) {
      socket.on('movement', function (data) {
        console.log(data);
      });
    });
  }

}

module.exports = Socket;


