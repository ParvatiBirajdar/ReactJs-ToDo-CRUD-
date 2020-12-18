import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './homePage';
import ToDoApp from './components/ToDo/TodoApp';
import CurdOpDisplay from './components/CURDOp/curdOpDisplay';
import CurdOpIconDisplay from './components/CURDOpIcon/curdOpIconDisplay';
import NavBar from './components/Header/nav';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
        render() 
        {
            return(
                <div>
                    <Router>
                <div>
                    <NavBar/>
                        <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/todoapp/" component={ToDoApp} />
                        <Route exact path="/curdopdisplay/" component={CurdOpDisplay} />
                        <Route exact path="/curdopicondisplay/" component={CurdOpIconDisplay}/>
                        </Switch>
                </div>
            </Router>
                </div>
            )
        }
    
}

export default AppContainer;