import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Logo from './Logo';
import ProfileNav from './ProfileNav';
import YourProfile from './YourProfile';
import StarredUsers from './StarredUsers';
import SelectedUsers from './SelectedUsers';
import Inbox from './Inbox';
import { connect } from 'react-redux';
import { getUserInfo } from './actions';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            city: '',
            targetlang1: ''
        };
    }

    componentDidMount() {
        this.props.dispatch(getUserInfo()).then(() => {
            this.setState({
                city: this.props.users[0].city,
                targetlang1: this.props.users[0].targetlang1
            });
        });
    }

    render() {
        return (
            <div className="profile-content">
                <ProfileNav />
                <YourProfile />
                <StarredUsers />
                <SelectedUsers
                    myCity={this.state.city}
                    targetLang={this.state.targetlang1}
                />
                <Inbox />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Profile);
