import React from 'react';
// import axios from 'axios';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import Welcome from './Welcome';
import Join from './Join';
import Pick from './Pick';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Logo />
                    <div className="app-content">
                        <Nav />
                        <Welcome />
                        <Pick />
                        <Join />
                        <Pick />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
