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
        // let ciao = axios.get(`/get-all-starred-users`);
        // let hallo = axios.get(`/get-altro`);
        //
        // let promises = [];
        // promises.push(ciao);
        // promises.push(hallo);
        //
        // Promise.all(promises).then(function(responses) {
        //     responseCiao = responses[0]
        //     responseHallo = response[1]
        //
        //     console.log(...)
        // });

        this.props.dispatch(getStarredUsers());
        // console.log('Starred users mounted', this.props);
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
