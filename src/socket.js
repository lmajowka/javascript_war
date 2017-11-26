const Soldier = require('./soldier');
const Combat = require('./combat');

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
        let soldier = client.soldier;
        if (soldier){
          soldier.x = data.coords.x;
          soldier.y = data.coords.y;
          Combat.checkColision(soldier);
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


