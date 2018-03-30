import React from 'react';
import { BrowserRouter, Link, Route, HashRouter } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Login from './Login';

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
                    <RegistrationForm />
                    <Login />
                </div>

                <HashRouter>
                    <div>
                        <div className="hidden.">
                            <Route
                                exact
                                path="/registration"
                                component={RegistrationForm}
                            />
                        </div>
                        <Route path="/login" component={Login} />
                    </div>
                </HashRouter>
            </div>
        );
    }
}
