class DefensePanel extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedFunction: 0
    }
  }

  _nextFunction(){
    let nextFunction = (this.state.selectedFunction + 1) % defenseFunctions.length;
    this.setState({selectedFunction: nextFunction})
  }

  render(){

    return (
      <div class='panel'>
        <div>Select your defense function:</div>
        <div>
           <DefenseFunction selectedFunction={defenseFunctions[this.state.selectedFunction]}/>
        </div>
        <div onClick={this._nextFunction.bind(this)}>Next</div>
      </div>  
    )
  }

}