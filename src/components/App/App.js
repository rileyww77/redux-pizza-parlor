import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
import UserForm from '../UserForm/UserForm';
import Checkout from '../Checkout/Checkout'
import Admin from '../Admin/Admin'
class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <Router >

          <ul className="navBar">

            <li className="nav"> <Link to="/pizzaList"> Menu </Link></li>
            <li className="nav"> <Link to="/userForm"> Order Details </Link></li>
            
          </ul>
          <Route path="/pizzaList" component={PizzaList} />
          <Route path="/userForm" component={UserForm} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/admin" component={Admin} />
          </Router>

        {/* <PizzaList /> */}

      </div>

    );
  }
}

export default connect()(App);
