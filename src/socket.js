const Soldier = require('./soldier');

class Socket{

  constructor(server){
    var io = require('socket.io')(server);
    
    io.on('connection', function (client) {

      client.on('join', function(name){
        client.name = name;
        Soldier.soldiers.push(new Soldier(client.name));
      });

      client.on('movement', function (data) {
        let soldier = Soldier.findSoldierByName(client.name);
        soldier.x = data.coords.x;
        soldier.y = data.coords.y;
        client.broadcast.emit('movement', Soldier.soldiers);
        client.emit('movement', Soldier.soldiers);
      });
    });
  }

}



module.exports = Socket;


