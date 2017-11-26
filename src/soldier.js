class Soldier{

  constructor(name){
    this.name = name;
    this.life = 100;
    this.defense = function(){
      return Math.floor(Math.random()*20);
    }
    this.attack = function(){
      return 10;
    }
  }

}

Soldier.soldiers = [];

module.exports = Soldier;