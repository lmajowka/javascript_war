class Soldier{

  constructor(name){
    this.name = name;
    this.life = 100;
    this.inCombat = false;
    this.alive = true;
    this.defense = function(attack){
      return Math.floor(Math.random()*10);
    }
    this.attack = function(){
      return 10;
    }
  }

  static removeSoldier(soldier){
    let soldierindex = Soldier.soldiers.indexOf(soldier);
    if (soldierindex == -1) return;
    Soldier.soldiers.splice(soldierindex,1);
  }

}

Soldier.soldiers = [];

module.exports = Soldier;