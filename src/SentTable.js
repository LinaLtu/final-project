import React from 'react';
import SendMessage from './SendMessage';
import ReplyMessage from './ReplyMessage';
import { connect } from 'react-redux';
import { getSentMessages } from './actions';
import { Link } from 'react-router-dom';
import { deleteMessage } from './actions';

function mapStateToProps(state) {
    return {
        sentMessages: state.sentMessages
    };
}

class SentTable extends React.Component {
    constructor() {
        super();

        this.state = {
            created_at: '',
            areMessages: true,
            messageToUser: false
        };

        this.renderChatMessages = this.renderChatMessages.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        var messageid = '';
    }

    componentDidMount() {
        this.props.dispatch(getSentMessages());
    }

    deleteMessage() {
        console.log('Delete Message has been clicked ', this.messageid);
        // this.props.dispatch(removeMessage());
    }

    renderChatMessages() {
        return (
            this.props.sentMessages &&
            this.props.sentMessages.map(sentMessage => {
                return (
                    <tr>
                        <td>
                            To:{' '}
                            <Link to={`/user/${sentMessage.recipient_id}`}>
                                {sentMessage.firstname}
                            </Link>
                        </td>
                        <td style={{ fontSize: '11px' }}>
                            {sentMessage.created_at}
                        </td>
                        <td className="shot-message-inbox">
                            {sentMessage.message}
                        </td>
                        <div
                            className="delete-icon"
                            onClick={() => {
                                this.props.dispatch(
                                    deleteMessage(sentMessage.id).then(
                                        this.setState({ messageToUser: true })
                                    )
                                );
                            }}
                        >
                            <img src="./delete-icon.jpg" />
                        </div>
                        <td />
                    </tr>
                );
            })
        );
    }

    render() {
        if (!this.props.sentMessages) {
            // this.setState({
            //     areMessages: false
            // });
            return null;
        }

        console.log('inside INBOX REPLY WINDOW', this.props.messages);
        // console.log('From RENDER ', this.props.messages[0].message);
        return (
            <div className="inbox-element">
                <h1>Sent Messages</h1>
                <table className="inbox-table">
                    {this.renderChatMessages()}
                </table>
                {this.state.showFullMassage && (
                    <div className="reply-message-field">
                        <ReplyMessage otherUserId={this.state.sender_id} />
                    </div>
                )}
                {this.state.messageToUser && (
                    <div className="message-deleted">
                        Message has been deleted
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SentTable);
