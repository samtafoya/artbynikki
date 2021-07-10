import React, { Component } from 'react';
import './App.css';


// Dont think i need this, delete class

/*
class Order1 extends Component {

    // Initialize state
    state = {
        titleTxt: "",
        name: "sam",
        email: "",
        description: ""
    }

    componentDidMount() {
        // get order type and set the title
        let orderType = localStorage.getItem('orderType');
        this.setState({ titleTxt: orderType });
        // api call when the page is accesses

        fetch('/api/hello')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });

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

    handleSubmit1 = async e => {
        // call the api
        this.callApi();

    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/send', {
            method: "POST",
            body: JSON.stringify(this.state.name),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
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
                    <input type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    <br></br>
                    <input type="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    <br></br>
                    <input type="text" placeholder="Item Details" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                    <br></br>
                    <button type="submit">Send Order</button>
                </form>
            </div>
        );
    }
}

export default Order1;
*/