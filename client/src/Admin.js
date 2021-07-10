import React, { Component } from 'react';
import './App.css';

class Admin extends Component {

    // Initialize state
    state = {
        idArr: [],
        nameArr: [],
        emailArr: [],
        detailsArr: [],
        allList: []
    }

    /*
    // Implementation of the "callApi" function to display orders
    callApi = async () => {
        console.log("inside callApi()");
        var urlGetOrder = "/api/orders";
        const responseT = await fetch(urlGetOrder);
        const body = await responseT.json();
        //var test = JSON.parse(body); // ---> body is already a string so no need to parse it (will throw an error)
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

    componentDidMount() {
        this.callApi()
            .then(res => {
                // confirm i can get the data from the api
                let testList = Object.values(res);
                console.log(testList);

                // get all the values out of the array returned from the api call
                let idArr, nameArr, emailArr, itemArr = [];
                idArr = [];
                nameArr = [];
                emailArr = [];
                itemArr = [];
                for (var i in res) {
                    let tempAllArr = [];
                    tempAllArr = Object.values(res[i]);
                    idArr.push(tempAllArr[0]);
                    nameArr.push(tempAllArr[1]);
                    emailArr.push(tempAllArr[2]);
                    itemArr.push(tempAllArr[3]);
                }
                console.log(nameArr);

                // add the items to the array as html elements
                let nList = [];
                for (var i in idArr) {
                    nList = this.state.allList.concat(
                        <div key={i} >
                            {idArr[i]} // {nameArr[i]} // {emailArr[i]} // {itemArr[i]}
                        </div>);
                    this.setState({ allList: nList });
                }
                this.setState({ allList: nList });
            })
            .catch(err => {
                console.log("Hello: Inside 'handleSubmit.catch'");
                console.log(err);
            });
    }
    */

    // Implementation of the "callApi" function to display images
    callApi = async () => {
        console.log("inside callApi()");
        var urlGetImage = "/api/getimages";
        const responseT = await fetch(urlGetImage);
        const body = await responseT.json();
        //var test = JSON.parse(body); // ---> body is already a string so no need to parse it (will throw an error)
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

    componentDidMount() {
        this.callApi()
            .then(res => {
                // confirm i can get the data from the api
                let testList = Object.values(res);
                console.log(testList);

                // get all the values out of the array returned from the api call
                let idArr, nameArr, emailArr, itemArr = [];
                idArr = [];
                nameArr = [];
                for (var i in res) {
                    let tempAllArr = [];
                    tempAllArr = Object.values(res[i]);
                    idArr.push(tempAllArr[0]);
                    nameArr.push(tempAllArr[1]);
                }
                console.log(nameArr);

                // add the items to the array as html elements
                let nList = [];
                for (var i in idArr) {
                    let test = nameArr[i];
                    nList = this.state.allList.concat(
                        `<div key={i} >
                        <img src="${test}" alt="Thelma"/>
                    </div>`);
                    this.setState({ allList: nList });
                }
                this.setState({ allList: nList });
            })
            .catch(err => {
                console.log("Hello: Inside 'handleSubmit.catch'");
                console.log(err);
            });
    }

    render() {
        const allList = this.state.allList;

        return (
            <div>
                <p className="App"> Admin Page </p>
                <br></br>
                {allList}
            </div>
        );
    }
}

export default Admin;