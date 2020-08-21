import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                    <tr>
                        {this.props.reduxState.orderReducer.map((order, i) => {
                            return(
                            <td key={i}>
                            {order.newUser.customer_name} 
                            </td>
                            <td>time</td>
                            <td>{order.newUser.type}</td>
                            <td>{order.newUser.total}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Admin);
