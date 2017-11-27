class MenuButton extends React.Component {

  render(){

    let activeClass = this.props.active ? 'control-panel-menu-button active' : 'control-panel-menu-button';

    return(
      <div class={activeClass} onClick={(e) => this.props.onClick(this.props.mode)}>
        {this.props.label}
      </div>
    );
  }

}