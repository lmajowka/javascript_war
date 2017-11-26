class Soldier extends React.Component {

  constructor(){
    super();
    this.state = {
      color: '#F00'
    }
  }


  render() {

    let style = {
      top: this.props.y + 'px',
      left: this.props.x + 'px'
    }

    let color = {
      color: this.state.color
    }

    return (
      <div style={style} class='soldier' onClick={this.onItemClick.bind(this)}>
        <div class='soldier-body' style={color}>
          *
        </div>
        <div>  
           {this.props.name} 
        </div>  
    </div>
    );
  }

  onItemClick(){
    this.setState({color: '#0F0'});
  }

}