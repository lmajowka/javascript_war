class Soldier{

  static findSoldierByName(name){
    return this.soldiers.find(function(soldier){ if (soldier.name == name) return true});
  }

}

Soldier.soldiers = [];

module.exports = Soldier;