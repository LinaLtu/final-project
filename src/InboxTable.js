import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';

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
        return (
            <div className="inbox-element">
                <h1>Inbox</h1>
                <table>
                    <tr>
                        <td>Sender</td>
                        <td
                            onClick={this.showFullMessage}
                            className="shot-message-inbox"
                        >
                            Beginning of the message
                        </td>
                    </tr>
                </table>
                {this.state.showFullMassage && <Message />}
            </div>
        );
    }
}

export default connect(null)(InboxTable);
