import React from 'react';
import axios from 'axios';
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
import { getUserInfo } from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor() {
        super();

        this.pickCity = this.pickCity.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getUserInfo());
    }

    pickCity() {
        this.child.toggleSearchCity();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Logo />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <div className="app-content">
                                <Nav pickCity={this.pickCity} />
                                <Welcome />
                                <Map />
                                <Join />
                                <Pick
                                    ref={instance => {
                                        this.child = instance;
                                    }}
                                />
                                <Footer />
                            </div>
                        )}
                    />
                    <Route exact path="/profile" component={Profile} />
                    <Route
                        exact
                        path={'/user/:id'}
                        component={OtherUserProfile}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null)(App);
