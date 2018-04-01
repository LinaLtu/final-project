import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Logo from './Logo';
import NavOnOtherUserProfile from './NavOnOtherUserProfile';
import OtherProfile from './OtherProfile';
import StarredUsers from './StarredUsers';
import SelectedUsers from './SelectedUsers';

export default class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="other-profile-content">
                <Logo />
                <NavOnOtherUserProfile />
                <OtherProfile />
            </div>
        );
    }
}
