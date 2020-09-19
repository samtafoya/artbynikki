import React, { Component } from 'react';
import './App.css';
import InstagramEmbed from 'react-instagram-embed';

class Art extends Component {

    // Initialize state
    state = {}

    render() {

        return (
            <div>
                <p className="App">
                    Art
                </p>
                <InstagramEmbed
                    url='https://www.instagram.com/p/CFS3s7UjIst/'
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div>
        );
    }
}

export default Art;