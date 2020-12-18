import React from 'react';
import './App.css';
import './assets/css/custom.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppContainer from '../src/AppContainer';

function App() 
{
  return (
    <div className="App">
                            <Router>
                                <AppContainer/>
                            </Router>

      </div>
  );
}

export default App;
