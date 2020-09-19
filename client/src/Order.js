import React, { Component } from 'react';
import './App.css';
import InstagramEmbed from 'react-instagram-embed';

class Order extends Component {

    // Initialize state
    state = {}

    componentDidMount() {
        // api call when the page is accesses
        /*
        fetch('/api/hello')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });
        */
    }

    // Implementation of the "callApi" function
    callApi = async () => {
        console.log("inside callApi() orders page");

        var urlHello = "/api/hello";
        const responseT = await fetch(urlHello);
        const body = await responseT.json();
        //debugger;
        if (responseT.status === 200) {
            console.log("callApi() succeeded");
        }
        else {
            console.log("callApi() failed");
            var errMsg = "ERROR: callApi() failed: (response.status===" + responseT.status + ") " + body.message;
            throw Error(errMsg);
        }
        return body;
    };

    handleSubmit = async e => {

        this.callApi();

    }

    render() {

        return (
            <div>
                <p className="App">
                    Orders
                </p>
                <button onClick={this.handleSubmit}>test API</button>
            </div>
        );
    }
}

export default Order;