import React from 'react';
import Profile from './Profile';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';

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
    }

    logOut(e) {
        e.preventDefault();
        axios.get('/logout').then(() => {
            location.replace('/');
        });
    }

    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <a href="#messages">
                        <li>MESSAGES</li>
                    </a>
                    <a href="#starredUsers">
                        <li onClick={this.toggleStarred}>STARRED USERS</li>
                    </a>
                    <a href="#yourTandem">
                        <li>YOUR NEW LE PARTNER?</li>
                    </a>
                    <li>SEARCH</li>
                    <li>FORUM</li>
                    <li onClick={this.logOut}>LOG OUT</li>
                </ul>
            </div>
        );
    }
}
