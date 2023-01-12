import React from 'react';
import "./index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    document.location.href = "/";
  }
  render() {
    return (
      
        <div className="container">
          <div onClick={this.handleClick} className="p-t-20 p-b-20 font-size-header" role="button">WebCeph</div>
        </div>
      
    );
  }
}

export default Header;
