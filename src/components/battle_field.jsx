class BattleField extends React.Component {
  
  render(){

    let soldiersComponents = [];
    
    for (let soldier of soldiers){
       soldiersComponents.push(<Soldier name={soldier.name} x={soldier.x} y={soldier.y}/>);
    }

    return (
      <div id='battle-field'>
        { soldiersComponents }
      </div>  
    );
  }

}  