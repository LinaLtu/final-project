import React from 'react';
import Message from './Message';
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
    }

    componentDidMount() {
        this.props.dispatch(getMessages());
    }

    showFullMessage() {
        this.setState({
            showFullMassage: !this.state.showFullMassage
        });
    }

    render() {
        if (!this.props.messages) {
            return null;
        }

        console.log('From RENDER ', this.props.messages[0].message);
        return (
            <div className="inbox-element">
                <h1>Inbox</h1>
                <table>
                    {this.props.messages &&
                        this.props.messages.map(message => {
                            return (
                                <tr>
                                    <td>{message.firstname}</td>
                                    <td
                                        onClick={this.showFullMessage}
                                        className="shot-message-inbox"
                                    >
                                        {message.message}
                                    </td>
                                </tr>
                            );
                        })}
                </table>
                {this.state.showFullMassage && <Message />}
            </div>
        );
    }
}

export default connect(mapStateToProps)(InboxTable);
