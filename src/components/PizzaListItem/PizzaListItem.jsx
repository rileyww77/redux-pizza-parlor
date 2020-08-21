import React, { Component } from 'react';
import { connect } from 'react-redux';

class PizzaListItem extends Component {



    addToOrder = () => {
        console.log(this.props.pizza)
        let pizza = this.props.pizza;
        pizza.quantity = 1
        this.props.dispatch({ type: 'ADD_TO_CART', payload: pizza })
    }

    render() {
        console.log(this.props.pizza)
        return (
            <div>
                <ul>
                    <li>{this.props.pizza.name}</li>
                    <li>{this.props.pizza.description}</li>
                    <li>{this.props.pizza.price}</li>
                    <img src={this.props.pizza.image_path} alt='pizza'></img>
                    <button onClick={this.addToOrder}>Add to order!</button>
                </ul>
            </div>
        );
    }
}

export default connect()(PizzaListItem);
