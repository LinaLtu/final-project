import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <li onClick={this.props.pickCity}>
                        <a href="#pickcity">PICK A CITY</a>
                    </li>
                    <li>
                        <a href="#picklanguage">PICK A LANGUAGE</a>
                    </li>
                    <a href="#signin">
                        <li>SIGN IN</li>
                    </a>
                </ul>
            </div>
        );
    }
}
