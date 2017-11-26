class Soldier extends React.Component {

  render() {

    let style = {
      top: this.props.y + 'px',
      left: this.props.x + 'px'
    }

    return (
      <div style={style} class='soldier'>
        <div class='soldier-body'>
          *
        </div>
        <div>  
           {this.props.name} 
        </div>  
    </div>
    );
  }
}