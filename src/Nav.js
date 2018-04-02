import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <li>PICK A CITY</li>
                    <li>PICK A LANGUAGE</li>
                    <li>LOG IN</li>
                </ul>
            </div>
        );
    }
}
