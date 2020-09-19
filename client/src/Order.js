import React, { Component } from 'react';
import './App.css';

class Order extends Component {

    // Initialize state
    state = {
        titleTxt: ""
    }

    componentDidMount() {
        // get order type and set the title
        let orderType = localStorage.getItem('orderType');
        this.setState({ titleTxt: orderType });
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
        // call the api 
        this.callApi();

    }

    render() {
        const text = this.state.titleTxt;
        return (
            <div>
                <p className="App">
                    Orders
                </p>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <strong>Order a {text}:</strong>
                    </p>
                    <input type="text" placeholder="Name" />
                    <br></br>
                    <input type="email" placeholder="Email" />
                    <br></br>
                    <input type="text" placeholder="Item Details" />
                    <br></br>
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}

export default Order;