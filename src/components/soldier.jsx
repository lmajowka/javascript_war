class Soldier extends React.Component {

  render() {

    let style = {
      top: Movements.coords.y + 'px',
      left: Movements.coords.x + 'px'
    }

    return (
      <div style={style} class='soldier'>
        <div class='soldier-body'>
          *
        </div>
        <div>  
           {this.props.name} ({Movements.coords.x},{Movements.coords.y})
        </div>  
    </div>
    );
  }
}