import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import InboxTable from './InboxTable';
import SentTable from './SentTable';

export default class Inbox extends React.Component {
    constructor() {
        super();

        this.state = {
            showInbox: true,
            showSent: false
        };

        this.onClickInbox = this.onClickInbox.bind(this);
        this.onClickSent = this.onClickSent.bind(this);
    }

    onClickInbox(e) {
        if (this.state.showSent === true) {
            this.setState({
                showInbox: true,
                showSent: false
            });
        }
    }

    onClickSent(e) {
        this.setState({
            showInbox: false,
            showSent: true
        });
    }

    render() {
        return (
            <div className="inbox-main" id="messages">
                <div className="inbox-window">
                    <ul className="inbox-messages">
                        <li onClick={this.onClickInbox}>Inbox</li>
                        <li onClick={this.onClickSent}>Sent</li>
                    </ul>
                    {this.state.showInbox && <InboxTable />}
                    {this.state.showSent && <SentTable />}
                </div>
            </div>
        );
    }
}
