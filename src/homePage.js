import React, {Component} from 'react';
import Header from '../src/components/Header/header';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

        render() 
        {
            return(
                <div className="App">
                    <Header/>
                </div>
            )
        }
    
}

export default HomePage;