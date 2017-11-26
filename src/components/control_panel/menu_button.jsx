class MenuButton extends React.Component {

  render(){
    return(
      <div class='control-panel-menu-button' onClick={(e) => this.props.onClick(this.props.mode)}>
        {this.props.label}
      </div>
    );
  }

}