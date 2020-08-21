import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList.jsx'


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <Router>

          <ul className="navBar">
            {/* <li className="nav"> <Link to="/pizzaList"> Menu </Link></li> */}
            {/* <li> <Link> </Link></li> */}

          </ul>

          {/* <Route path="/pizzaList" component={PizzaList} /> */}
        </Router>
        <PizzaList />
      </div>

    );
  }
}

export default App;
