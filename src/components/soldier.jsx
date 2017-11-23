class Soldier extends React.Component {

  constructor(){
    super();

    this.state = {
      x: 100,
      y: 100
    }
  }

  move(event){
    console.log(event);
  }

  render() {

    let style = {
      top: this.state.y + 'px',
      left: this.state.x + 'px'
    }

    return (
      <div style={style} class='soldier'>
        <div class='soldier-body'>
          *
        </div>
        <div>  
           {this.props.name} ({this.state.x},{this.state.y})
        </div>  
    </div>
    );
  }
}