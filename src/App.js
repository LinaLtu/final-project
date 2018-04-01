import React from 'react';
// import axios from 'axios';
import { BrowserRouter, Link, Route, HashRouter } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import Welcome from './Welcome';
import Join from './Join';
import Pick from './Pick';
import Map from './Map';
import Footer from './Footer';
import Profile from './Profile';
import OtherUserProfile from './OtherProfile';

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
                        <Map />
                        <Join />
                        <Pick />
                        <Footer />
                    </div>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/user" component={OtherUserProfile} />
                </div>
            </BrowserRouter>
        );
    }
}
