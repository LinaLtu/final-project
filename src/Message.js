import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ReplyMessage from './ReplyMessage';

export default class Messahe extends React.Component {
    constructor() {
        super();


    this.state = {
        replyMessage: false
    }

            this.replyMessage = this.replyMessage.bind(this);
    }

        replyMessage() {
            this.setState({
                replyMessage: !this.state.replyMessage
            });
        }

    render() {
        return (
            <div className="message">This is a full message
                <button onClick="replyMessage">Reply</button>
                        {this.state.replyMessage && (<ReplyMessage />)}

    </div>);
    }
}
