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
        changeColor(e);
        if (this.state.showSent === true) {
            this.setState({
                showInbox: true,
                showSent: false
            });
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = 'rgb(192, 194, 186)';
        }
    }

    onClickSent(e) {
        changeColor(e);
        if (this.state.showInbox === true) {
            this.setState({
                showInbox: false,
                showSent: true
            });
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = 'rgb(192, 194, 186)';
        }
    }

    render() {
        // const  { firstname, lastname, email, password } = this.state;
        //send info to Redux
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

function changeColor(e) {
    if (e.target.style.backgroundColor != 'white') {
        e.target.style.backgroundColor = 'white';
    } else {
        e.target.style.backgroundColor = 'rgb(192, 194, 186)';
    }
}
