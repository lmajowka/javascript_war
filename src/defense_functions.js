const defenseFunctions = [

  function(attack){
    return Math.floor(Math.random()*10);
  },

  function(attack){
    if (attack % 2 == 0){
      return 10;
    }
    return Math.floor(Math.random()*3);
  },

  function(attack){
    return attack;
  }

];

 module.exports = defenseFunctions;
