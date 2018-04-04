import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ReplyMessage from './ReplyMessage';
import SendMessage from './SendMessage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}
class Message extends React.Component {
    constructor() {
        super();

        this.state = {
            replyMessage: false
        };

        this.replyMessage = this.replyMessage.bind(this);
    }

    replyMessage() {
        this.setState({
            replyMessage: !this.state.replyMessage
        });
    }

    render() {
        return (
            <div className="message">
                <button onClick={this.replyMessage}>Reply</button>
                {this.state.replyMessage && <SendMessage />}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Message);
