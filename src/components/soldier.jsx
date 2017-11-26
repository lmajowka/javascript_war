class Soldier extends React.Component {

  constructor(){
    super();
  }


  render() {

    let style = {
      top: this.props.y + 'px',
      left: this.props.x + 'px',
    }

    let color = {
      color: this.props.inCombat ? '#F00' : '#000'
    }

    return (
      <div style={style} class='soldier'>
        <div class='soldier-body' style={color}>
          *
        </div>
        <div>  
           {this.props.name} 
        </div>  
    </div>
    );
  }

}