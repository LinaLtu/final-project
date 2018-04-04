import React from 'react';
import SendMessage from './SendMessage';
import { connect } from 'react-redux';
import { getMessages } from './actions';

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

class InboxTable extends React.Component {
    constructor() {
        super();

        this.state = {
            showFullMassage: false
        };

        this.showFullMessage = this.showFullMessage.bind(this);
        this.renderChatMessages = this.renderChatMessages.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getMessages());
    }

    showFullMessage(message) {
        this.setState({
            showFullMassage: !this.state.showFullMassage,
            recipientId: message.recipient_id,
            senderId: message.sender_id
        });
    }

    renderChatMessages() {
        // if (this.props.messages) {
        //     this.setState({
        //         recipientId: this.props.messages[0].recipient_id,
        //         senderId: this.props.messages[0].sender_id
        //     });
        // }
        return (
            this.props.messages &&
            this.props.messages.map(message => {
                return (
                    <tr>
                        <td>{message.firstname}</td>
                        <td
                            onClick={() => {
                                this.showFullMessage(message);
                            }}
                            className="shot-message-inbox"
                        >
                            {message.message}
                        </td>
                    </tr>
                );
            })
        );
    }

    render() {
        if (!this.props.messages) {
            return null;
        }

        console.log('From RENDER ', this.props.messages[0].message);
        return (
            <div className="inbox-element">
                <h1>Inbox</h1>
                <table>{this.renderChatMessages()}</table>

                {this.state.showFullMassage && (
                    <SendMessage
                        recipientId={this.state.recipient_id}
                        senderId={this.state.sender_id}
                    />
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(InboxTable);
