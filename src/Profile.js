import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pick">
                <h1>This is your profile</h1>
            </div>
        );
    }
}
