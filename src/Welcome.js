import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Welcome extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="welcome">
                <h1>
                    This is a very smart quote and some nice background image
                </h1>
            </div>
        );
    }
}
