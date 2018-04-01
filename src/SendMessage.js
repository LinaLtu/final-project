import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class SendMessage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="inbox-main">
                <h1>You can send a message here</h1>
            </div>
        );
    }
}
