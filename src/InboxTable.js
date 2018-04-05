import React from 'react';
import SendMessage from './SendMessage';
import ReplyMessage from './ReplyMessage';
import { connect } from 'react-redux';
import { getMessages } from './actions';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

class InboxTable extends React.Component {
    constructor() {
        super();

        this.state = {
            showFullMassage: false,
            created_at: ''
        };

        this.showFullMessage = this.showFullMessage.bind(this);
        this.renderChatMessages = this.renderChatMessages.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getMessages());
    }

    showFullMessage(message) {
        console.log('THE FUNCTION RAN', message.created_at);
        this.setState(
            {
                sender_id: message.sender_id
            },
            function() {
                this.setState({ showFullMassage: !this.state.showFullMassage });
            }
        );
    }

    renderChatMessages() {
        return (
            this.props.messages &&
            this.props.messages.map(message => {
                return (
                    <tr>
                        <td>
                            <Link to={`/user/${message.sender_id}`}>
                                {message.firstname}
                            </Link>
                        </td>
                        <td style={{ fontSize: '11px' }}>
                            {message.created_at}
                        </td>
                        <td
                            onClick={() => {
                                this.showFullMessage(message);
                            }}
                            className="shot-message-inbox"
                        >
                            {message.message}
                        </td>
                        <div className="delete-icon">
                            <img src="./delete-icon.jpg" />
                        </div>
                        <td />
                    </tr>
                );
            })
        );
    }

    render() {
        if (!this.props.messages) {
            return null;
        }

        console.log('inside INBOX REPLY WINDOW', this.props.messages);
        // console.log('From RENDER ', this.props.messages[0].message);
        return (
            <div className="inbox-element">
                <h1>Inbox</h1>
                <table className="inbox-table">
                    {this.renderChatMessages()}
                </table>

                {this.state.showFullMassage && (
                    <div className="reply-message-field">
                        <ReplyMessage otherUserId={this.state.sender_id} />
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(InboxTable);
