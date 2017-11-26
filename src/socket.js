const Soldier = require('./soldier');

class Socket{

  constructor(server){
    var io = require('socket.io')(server);
    
    io.on('connection', function (client) {

      client.on('join', function(name){
        client.name = name;
        client.soldier = new Soldier(client.name)
        Soldier.soldiers.push(client.soldier);
      });

      client.on('movement', function (data) {
        if (client.soldier){
          client.soldier.x = data.coords.x;
          client.soldier.y = data.coords.y;
        }
        client.broadcast.emit('movement', Soldier.soldiers);
        client.emit('movement', Soldier.soldiers);
      });

      client.on('disconnect', function () {
        let soldierindex = Soldier.soldiers.indexOf(client.soldier);
        Soldier.soldiers.splice(soldierindex,1);
      });

    });
  }

}



module.exports = Socket;


