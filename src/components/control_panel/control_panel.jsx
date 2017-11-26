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
    if (this.state.mode == 'defense'){
      panel = <DefensePanel />
    } else {
      panel = <AttackPanel />
    }

    return (
      <div id='control-panel'>
        <MenuButton label='Defense' mode='defense' onClick={this._changeMode.bind(this)}/>
        <MenuButton label='Attack' mode='attack' onClick={this._changeMode.bind(this)}/>
        { panel }
      </div>
    );
  }

  

}