import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
class Admin extends Component {

    componentDidMount() {
        //load on page load   
        this.getOrder();
    }
    getOrder = () => {
        axios.get('/api/order')
            .then((response) => {
                console.log('response:', response.data)
                
            }).catch((error) => {
                console.log('error in get', error)
            })
    }

    render() {
        let order = this.props.orderReducer
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
                                <>
                            <td >
                            {order.customer_name}
                            </td>
                            <td>time</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                            </>
                            
                     
                    </tr>
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (reduxState) => {
    return {
        orderReducer: reduxState.orderReducer,
    }
}
export default connect(mapStateToProps)(Admin);
