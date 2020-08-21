import React, { Component } from 'react';
import { connect } from 'react-redux';



class Cart extends Component {    
    render() {
        // const total = this.props.reduxState.checkoutReducer.reduce((totalPrice, pizza) => totalPrice + Number(pizza.price), 0)
        return (
            <div>

                {this.props.reduxState.checkoutReducer.map((pizza, i) => {
                    return (
                        <p key={i}>
                            {pizza.name}
                        </p>
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
export default connect(mapStateToProps)(Cart);
