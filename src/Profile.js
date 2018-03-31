import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Logo from './Logo';
import ProfileNav from './ProfileNav';
import YourProfile from './YourProfile';
import StarredUsers from './StarredUsers';

export default class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="profile-content">
                <Logo />
                <ProfileNav />
                <YourProfile />
                <StarredUsers />
            </div>
        );
    }
}
