import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import Cart from '../Cart/Cart.jsx'
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import { withRouter } from "react-router";


class PizzaList extends Component {

    componentDidMount() {
        //load on page load   
        this.getPizza();
    }

    //get list of pizzas from server and send to redux
    getPizza = () => {
        axios.get('/api/pizza')
            .then((response) => {
                console.log('response:', response.data)
                this.props.dispatch({ type: 'GET_PIZZAS', payload: response.data })
            }).catch((error) => {
                console.log('error in get', error)
            })
    }


    next = () => {
        this.props.history.push('/userForm')
     }

    render() {
        const total = this.props.reduxState.checkoutReducer.reduce((totalPrice, pizza) => totalPrice + Number(pizza.price), 0)
        // const quantity = 1;
        return (
            <div>
                 
             
                
                <Cart />
                <button onClick={this.next} type="button" > NEXT </button>
                <p>Total: {total}</p>
                {/* <p>quantity: {quantity}</p> */}

                {this.props.reduxState.pizzaListReducer.map((pizza, i) => {
                    return (
                        <PizzaListItem
                            key={i}
                            pizza={pizza} />
                    )
                })}

            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapStateToProps)(PizzaList);

