import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Logo from './Logo';
import ProfileNav from './ProfileNav';
import YourProfile from './YourProfile';

export default class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="profile-contetn">
                <Logo />
                <ProfileNav />
                <YourProfile />
            </div>
        );
    }
}
