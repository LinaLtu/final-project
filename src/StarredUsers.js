import React from 'react';

export default class StarredUsers extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="starred-users">
                <h1>Starred Users</h1>
                <h2>User1</h2>
                <h2>User2</h2>
                <h2>User3</h2>
            </div>
        );
    }
}
