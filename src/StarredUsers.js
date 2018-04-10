import React from 'react';
import UserComponentStarred from './UserComponentStarred';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStarredUsers } from './actions';

function mapStateToProps(state) {
    return {
        starredUsers: state.starredUsers
    };
}

class StarredUsers extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(getStarredUsers());
    }

    render() {
        if (!this.props.starredUsers) {
            return null;
        }

        console.log('From app ', this.props.starredUsers.length);

        return (
            <div className="starred-users" id="starredUsers">
                <h1>Starred Users</h1>

                <UserComponentStarred />
            </div>
        );
    }
}

export default connect(mapStateToProps)(StarredUsers);
