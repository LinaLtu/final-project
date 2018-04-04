import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { sendMessage } from './actions';
import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {
//         users: state.users
//     };
// }

class SendMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            messageToUser: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onKeyDown(e) {
        console.log(e.target.value);
    }

    handleSubmit(e) {
        console.log('Props.match from SendMessage', this.state.message);
        this.props
            .dispatch(sendMessage(this.props.otherUserId, this.state.message))
            .then(this.setState({ messageToUser: true }))
            .then(() => console.log('Message sent', this.state.messageToUser));
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
    }

    render() {
        return (
            <div className="message-area">
                <h1 className="h1-message">Send a message to user</h1>
                <textarea
                    className="message-text-area"
                    onKeyDown={this.onKeyDown}
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

export default connect(null)(SendMessage);
