import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Pick extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pick">
                <h1>
                    Here you'll see two pictures allowing you to search for
                    users by language and city
                </h1>
            </div>
        );
    }
}
