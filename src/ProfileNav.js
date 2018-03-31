import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class ProfileNav extends React.Component {
    constructor() {
        super();

        this.state = {
            showStarred: false
        };

        this.toggleStarred = this.toggleStarred.bind(this);
    }

    toggleStarred() {
        this.setState({
            showStarred: !this.state.showStarred
        });
        console.log('Working', this.state.showStarred);
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
