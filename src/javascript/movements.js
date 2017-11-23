class Movements {

  static move(event){
    let movement = this.moves[event.keyCode];
    if (movement){
      this.coords.x += movement[0];
      this.coords.y += movement[1];
      socket.emit('movement', { coords: this.coords });
    }
  }

}

Movements.speed = 4;

Movements.moves = {
  100: [1*Movements.speed,0], //d
  115: [0,1*Movements.speed], //s
  97:  [-1*Movements.speed,0], //a
  119: [0,-1*Movements.speed] //w
}

Movements.coords = {
  x: 100,
  y: 100
}