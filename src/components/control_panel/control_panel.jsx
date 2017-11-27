class ControlPanel extends React.Component {

  constructor(){
    super();
    this.state = {
      mode: 'defense'
    }
  }

  _changeMode(mode){
    console.log(mode);
    this.setState({mode: mode});
  }

  render(){

    let panel = null;
    let defenseActive = false;
    let attackActive = false;


    if (this.state.mode == 'defense'){
      panel = <DefensePanel />
      defenseActive = true;
    } else {
      panel = <AttackPanel />
      attackActive = true;
    }

    return (
      <div id='control-panel'>
        <MenuButton label='Defense' mode='defense' active={defenseActive} onClick={this._changeMode.bind(this)}/>
        <MenuButton label='Attack' mode='attack' active={attackActive} onClick={this._changeMode.bind(this)}/>
        { panel }
      </div>
    );
  }

  

}