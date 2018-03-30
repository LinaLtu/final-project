import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/search-by-city">PICK A CITY</Link>
                    </li>
                    <li>
                        <Link to="/search-by-language">PICK A LANGUAGE</Link>
                    </li>
                    <li>
                        <Link to="/login">LOG IN</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
