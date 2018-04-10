import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { sendMessage } from './actions';
import { connect } from 'react-redux';

class ReplyMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messageToUser: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        this.props
            .dispatch(sendMessage(this.props.otherUserId, this.state.message))
            .then(this.setState({ messageToUser: true }));
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
    }

    render() {
        return (
            <div className="message-area">
                <h1 className="h1-message">Reply</h1>
                <textarea
                    className="message-text-area"
                    onChange={this.handleChange}
                />{' '}
                <br />
                <button
                    onClick={this.handleSubmit}
                    className="message-send-button"
                >
                    Send
                </button>
                {this.state.messageToUser && (
                    <div className="message-sent">Message has been sent!</div>
                )}
            </div>
        );
    }
}

export default connect(null)(ReplyMessage);
