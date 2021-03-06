const Soldier = require('./soldier');
const Combat = require('./combat');
const defenseFunctions = require('./defense_functions');

class Socket{

  constructor(server){
    var io = require('socket.io')(server);
    
    io.on('connection', function (client) {

      client.on('join', function(name){
        client.name = decodeURI(name);
        client.soldier = new Soldier(client.name)
        Soldier.soldiers.push(client.soldier);
        client.emit('defense_functions', defenseFunctions.map((df) => df.toString()));
      });

      client.on('movement', function (data) {
        let soldier = client.soldier;
        if (!soldier.alive) return; 
        if (soldier){
          soldier.x = data.coords.x;
          soldier.y = data.coords.y;
          Combat.checkColision(soldier);
          if (soldier.life < 0){
            soldier.alive = false;
            Soldier.removeSoldier(soldier);
            client.emit('you_died', {});
          }
        }
        client.broadcast.emit('movement', Soldier.soldiers);
        client.emit('movement', Soldier.soldiers);
      });

      client.on('disconnect', function () {
        Soldier.removeSoldier(client.soldier);
      });

    });
  }

}

module.exports = Socket;


