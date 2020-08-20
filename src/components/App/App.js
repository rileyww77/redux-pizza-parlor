import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <Router>

          <ul className="navBar">
            <li> <Link> </Link></li>
            <li> <Link> </Link></li>

          </ul>

          <Route></Route>
        </Router>
      </div>
    );
  }
}

export default App;
