import React, { Component } from 'react';
import './App.css';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            titleTxt: ''
        }
    }

    componentDidMount() {
        // get order type and set the title
        let orderType = localStorage.getItem('orderType');
        this.setState({ titleTxt: orderType });
    }

    render() {
        const text = this.state.titleTxt;
        return (
            <div>
                <p className="App">
                    Order a {text}:
                </p>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="name">Name  </label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address   </label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="message">Message    </label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <button onClick={this.handleSubmit2}>Submit2</button>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        fetch('/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                //alert("Message Sent.");
                //this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })

        fetch('/api/sendorder', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }
}

export default Order;