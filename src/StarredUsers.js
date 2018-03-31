import React from 'react';
import UserComponent from './UserComponent';

export default class StarredUsers extends React.Component {
    constructor() {
        super();
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
