class Soldier{

  constructor(name){
    this.name = name;
    this.life = 100;
    this.inCombat = false;
    this.defense = function(attack){
      return Math.floor(Math.random()*20);
    }
    this.attack = function(){
      return 10;
    }
  }

  static removeSoldier(soldier){
    let soldierindex = Soldier.soldiers.indexOf(soldier);
    Soldier.soldiers.splice(soldierindex,1);
  }

}

Soldier.soldiers = [];

module.exports = Soldier;