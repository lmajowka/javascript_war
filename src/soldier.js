class Soldier{

  constructor(name){
    this.x = 0;
    this.y = 0;
    this.name = name;
  }

  static findSoldierByName(name){
    return this.soldiers.find(function(soldier){ if (soldier.name == name) return true});
  }

}

Soldier.soldiers = [];

module.exports = Soldier;