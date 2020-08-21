import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
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
