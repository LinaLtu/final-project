import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Logo from './Logo';
import ProfileNav from './ProfileNav';
import YourProfile from './YourProfile';
import Profile from './Profile';
import StarredUsers from './StarredUsers';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showStarred: this.props.showStarred
        };
    }

    render() {
        return (
            <div className="profile-content">
                <Logo />
                <ProfileNav />
                <YourProfile />
                {this.props.showStarred && (<StarredUsers />)};
            </div>
        );
    }
}
