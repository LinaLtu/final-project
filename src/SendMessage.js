import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class SendMessage extends React.Component {
    constructor() {
        super();
    }

    onKeyDown(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="message-area">
                <h1 className="h1-message">Send a message to user</h1>
                <textarea
                    className="message-text-area"
                    onKeyDown={this.onKeyDown}
                />{' '}
                <br />
                <button className="message-send-button">Send</button>
            </div>
        );
    }
}
