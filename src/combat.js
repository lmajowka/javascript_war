const Soldier = require('./soldier');

class Combat{

  static checkColision(soldier){
    const DISTANCE_THERSHOLD = 20;

    for (let _soldier of Soldier.soldiers){
      if (_soldier != soldier){
        let distance = this.distance(_soldier.x, soldier.x, _soldier.y, soldier.y);
        if (distance < DISTANCE_THERSHOLD){
          soldier.inCombat = true;
          _soldier.inCombat = true;
        } else {
          soldier.inCombat = false;
          _soldier.inCombat = false;
        }
      }
    }
  }

  static distance(x1,x2,y1,y2){
    return Math.sqrt(Math.pow(x1 - x2,2) + Math.pow(y1 - y2,2));
  }
  
}

module.exports = Combat;