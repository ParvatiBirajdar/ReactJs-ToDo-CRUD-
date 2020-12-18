import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {

    }
    }
  
    render() {
      return (
        <div className="container-fuild bg-info">
          <div className="row">
<nav className="navbar navbar-toggleable-sm navbar-inverse font-weight-bold">
    <div className="collapse navbar-collapse" id="mainNav">
        <div className="navbar-nav">
           <NavLink 
            className="nav-item nav-link text-white" 
            exact activeClassName="active" 
            to="/">HOME</NavLink>
            <NavLink 
            className="nav-item nav-link text-white" 
            exact activeClassName="active" 
            to="/todoapp/">TODO</NavLink>
            <NavLink 
            className="nav-item nav-link text-white" 
            activeClassName="active" 
            to="/curdopdisplay/" >CURD</NavLink>
            <NavLink 
            className="nav-item nav-link text-white" 
            activeClassName="active" 
            to="/curdopicondisplay/" >CURD ICON</NavLink>
            </div>
</div>
</nav>
</div>
</div>
      )
    }
}
export default NavBar;