import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Join extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="join">
                <div className="buttons-field">
                    <p>Cross the Language Barrier.</p>
                    <p>Join Our Community Now!</p>
                    <button className="join-button">Register</button>
                    <button className="join-button">Sign In</button>
                </div>
            </div>
        );
    }
}
