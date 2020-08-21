import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//get list of pizzas
const pizzaListReducer = (state = [], action) => {
    if (action.type === 'GET_PIZZAS'){
        return action.payload
    }
    return state;
}

const orderReducer = (state = [], action) => {
    if (action.type === 'GET_ORDER'){
        return action.payload
    } return state
}

//items in the cart
const checkoutReducer = (state = [], action) => {
    // TODO: Pizzas added to the cart
    if (action.type === 'ADD_TO_CART'){
        return [...state, action.payload]
    } else if (action.type === 'CLEAR_CART'){
        return [];
    } 
    return state;
};

//holds user info
const userReducer = (state = [], action) => {
    if (action.type === 'ADD_NEW_USER') {
        return [...state, action.payload];
    }
    return state;
};


const store = createStore(
    combineReducers({
        pizzaListReducer,
        orderReducer,
        checkoutReducer,
        userReducer
    
    }),   
    applyMiddleware(logger),
 );
  
  
 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

