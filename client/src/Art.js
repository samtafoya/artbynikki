import React, { Component } from 'react';
import './App.css';

class Art extends Component {

    // Initialize state
    state = {}

    handleSubmitCooler = async e => {
        // redirect to the orders page
        localStorage.setItem('orderType', "Cooler");
        console.log(localStorage.getItem('orderType'));
        this.props.history.push('/order');
    }

    handleSubmitCanvas = async e => {
        // redirect to the orders page
        localStorage.setItem('orderType', "Canvas");
        console.log(localStorage.getItem('orderType'));
        this.props.history.push('/order');
    }

    handleSubmitCricket = async e => {
        // redirect to the orders page
        localStorage.setItem('orderType', "Cricket Item");
        console.log(localStorage.getItem('orderType'));
        this.props.history.push('/order');
    }

    render() {

        return (
            <div>
                <p className="App">
                    Art
                </p>
                <ul>
                    <li onClick={this.handleSubmitCooler}>Cooler</li>
                    <br></br>
                    <li onClick={this.handleSubmitCanvas}>Canvas</li>
                    <br></br>
                    <li onClick={this.handleSubmitCricket}>Cricket Item</li>
                </ul>
            </div>
        );
    }
}

export default Art;