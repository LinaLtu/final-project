import React from 'react';
import UserComponent from './UserComponent';

export default class SelectedUsers extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="starred-users" id="yourTandem">
                <h1>People You Might be Interested to Meet</h1>
                <div className="starred-flex">
                    <UserComponent />
                </div>
            </div>
        );
    }
}
