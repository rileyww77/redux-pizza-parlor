import React, { Component } from 'react';
import { connect } from 'react-redux'
import './UserForm.css'


class UserForm extends Component {

    state = {
        newUser: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
            type: ''
        }
    }

    

    handleChange = (event, propertyName) => {
        console.log('this is the property', propertyName);
        this.setState({
            newUser: {
                ...this.state.newUser,
                [propertyName]: event.target.value
            }
        })
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_USER', payload: this.state.newUser });
        this.props.history.push('/checkout')
    }

    prevPage = () => {
       this.props.history.push('/pizzaList')
    }
    nextPage = () => {
        this.props.history.push('/checkout')
     }
  
    render() {
       
        return (
            <div >
                <h2> Add Your Information</h2>
                <form onSubmit={this.handleSubmit} className="wrapper">
                    <input
                        required placeholder="full name"
                        type="text"
                        value={this.state.newUser.customer_name}
                        onChange={(event) => this.handleChange(event, 'customer_name')}
                    />
                    <input
                        required placeholder="Street Address"
                        type="text"
                        value={this.state.newUser.street_address}
                        onChange={(event) => this.handleChange(event, 'street_address')}
                    />
                    <input
                        required placeholder="City"
                        type="text"
                        value={this.state.newUser.city}
                        onChange={(event) => this.handleChange(event, 'city')}
                    />
                    <input
                        required placeholder="Zip"
                        type="text"
                        value={this.state.newUser.zip}
                        onChange={(event) => this.handleChange(event, 'zip')}
                    />
                    <input
                        required placeholder="Delivery or Pickup"
                        type="text"
                        value={this.state.newUser.type}
                        onChange={(event) => this.handleChange(event, 'type')}
                    />

                    <button type="submit" > SUBMIT</button>
                </form>
                
                <button onClick={this.prevPage}> PREVIOUS </button>
                <button onClick={this.nextPage}> NEXT </button>
              


            </div>
        );
    }
}

const passingProps = (reduxState) => {
    return {
        checkoutReducer: reduxState.checkoutReducer
    }
}

// 
export default connect(passingProps)(UserForm);
