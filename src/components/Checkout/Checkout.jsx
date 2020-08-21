import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

class Checkout extends Component {

    postOrder = () => {
        // just like $.ajax()
        axios({
            method: 'POST',
            url: '/api/order'
        }).then((response) => {
            console.log(response);
            // response.data will be the array of artists
            this.props.dispatch({ type: 'POST_ORDER', payload: response.data })
        });
    }


    render() {
        let order = this.props.checkoutReducer; 
        let userInfo = this.props.userReducer;
        console.log(order);
        

        if ((userInfo.length - 1 || order.length -1) < 0 === true) {
            return <h1> Checkout </h1>
        } else {
            let userIndex = userInfo.length - 1;
            // let userOrder = order.length - 1;
            console.log(userIndex);
            let actualUserInfo = userInfo[userIndex];
            // let actualOrder = order[userOrder]
            console.log(actualUserInfo);
            // console.log(actualOrder);
            console.log(order[0]);

            let orderToPost = {
                ...order[0],
                ...actualUserInfo
            } 
            console.log(orderToPost);
            this.postOrder(orderToPost)
            return (
            <>
            <h1> Checkout </h1>
            <ul>
                <li> {actualUserInfo.customer_name} </li>
                <li> {actualUserInfo.street_address} </li>    
                <li> {actualUserInfo.city} </li>    
                <li> {actualUserInfo.zip} </li>    
                <li> {actualUserInfo.type} </li>   
             
                <li> {order[0].total}</li> 
            </ul>
          </>
        )};
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
