import React from 'react';
import UserComponent from './UserComponent';
import axios from 'axios';

export default class StarredUsers extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('Starred users mounted');
        axios
            .get(`/get-all-starred-users`)
            .then
            // this.props.dispatch(
            //     getOtherUserInfo(this.props.match.params.id)
            //     // )
            // )
            // .then(() => {
            //     console.log('From state to props ', this.props.users);
            // }
            ();
    }

    render() {
        return (
            <div className="starred-users">
                <h1>Starred Users</h1>
                <div className="starred-flex">
                    <UserComponent />
                    <UserComponent />
                    <UserComponent />
                </div>
            </div>
        );
    }
}
