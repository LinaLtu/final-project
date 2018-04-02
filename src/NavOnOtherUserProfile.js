import React from 'react';
import Profile from './Profile';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class ProfileNav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <li>MESSAGES</li>
                    <li>YOUR PROFILE</li>
                    <li>SEARCH</li>
                    <li>FORUM</li>
                </ul>
            </div>
        );
    }
}
