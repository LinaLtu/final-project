import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Join extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="join">
                <h1>There will be a sign in buttom</h1>
                <div className="join-buttons">
                    <button>Register</button>
                    <button>Sign In</button>
                </div>
            </div>
        );
    }
}
