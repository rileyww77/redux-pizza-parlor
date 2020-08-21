import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

class Checkout extends Component {


    postOrder = (order) => {
        axios.post('/api/order', order)
        .then((response) => {
        //   this.props.dispatch({ type: 'POST_ORDER', payload: response.data })
        }).catch((error) => {
          console.log(error);
        })
    }

    render() {

        let order = this.props.checkoutReducer;
        console.log(order);
        let userInfo = this.props.userReducer;
        const total = order.reduce((totalPrice, pizza) => totalPrice + Number(pizza.price), 0)

        let pizzas = []


        // let pizzas = order.map(pizza => {
        //     return {name : pizza.name}
        // })
        
        

        console.log(pizzas);
        console.log(total);

        if (((userInfo.length - 1 || order.length - 1) < 0) === true) {
            return <h1> Checkout </h1>
        } else {
            let userIndex = userInfo.length - 1;
            console.log(userIndex);
            let actualOrder = userInfo[userIndex];
            console.log(actualOrder);

            actualOrder.total = total;
            actualOrder.pizzas = pizzas;

            
            console.log('this is the object to post', actualOrder);

            return (
                <>
                    <h1> Checkout </h1>
                    <ul>
                        <li> {actualOrder.customer_name} </li>
                        <li> {actualOrder.street_address} </li>
                        <li> {actualOrder.city} </li>
                        <li> {actualOrder.zip} </li>
                        <li> {actualOrder.type} </li>
                        <li> {pizzas}</li>
                        <li> {total}</li>
                    </ul>

                    <button onClick={() => this.postOrder(actualOrder)}> Submit</button>
                </>
            )
        };
    }
}

const passingProps = (reduxState) => {
    return {
        userReducer: reduxState.userReducer,
        checkoutReducer: reduxState.checkoutReducer
    }
}

// 
export default connect(passingProps)(Checkout);
