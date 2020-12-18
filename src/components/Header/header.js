import React from 'react';

class Header extends React.Component {
    constructor() {
      super();
      this.state = {

    }
    }
  
    render() {
      return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4 font-weight-bold">ReactJS Demo</h1>
                    <p className="lead">TODO and CURD Operation</p>
                    <p className="lead">By Parvati Birajdar</p>
                </div>
            </div>
      )
    }
}
export default Header;