import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class ProfileNav extends React.Component {
    constructor() {
        super();

        this.toggleStarred = this.toggleStarred.bind(this);
    }

    toggleStarred() {
        console.log('Working');
    }

    render() {
        return (
            <div className="nav">
                <ul>
                    <li>MESSAGES</li>
                    <li onClick={this.toggleStarred}>STARRED USERS</li>
                    <li>YOUR LE PARTNER?</li>
                    <li>SEARCH</li>
                    <li>FORUM</li>
                </ul>
            </div>
        );
    }
}
