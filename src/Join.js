import React from 'react';
import { BrowserRouter, Link, Route, HashRouter } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Login from './Login';

export default class Join extends React.Component {
    constructor() {
        super();

        this.state = {
            showRegistrationForm: false,
            showLogInForm: false
        };

        this.toggleRegistrationForm = this.toggleRegistrationForm.bind(this);
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
    }

    toggleRegistrationForm() {
        if(this.state.showLogInForm === true){
            this.setState({
                showLogInForm: false
            });
        }
        this.setState({
            showRegistrationForm: !this.state.showRegistrationForm
        });
    }

    toggleLoginForm() {
        if(this.state.showRegistrationForm === true){
            this.setState({
                showRegistrationForm: false
            });
        }
        this.setState({
            showLogInForm: !this.state.showLogInForm
        });
    }

    render() {
        return (
            <div className="join">
                <div className="buttons-field">
                    <p>Cross the Language Barrier.</p>
                    <p>Join Our Community Now!</p>
                    <button className="join-button"  onClick={this.toggleRegistrationForm}>Register</button>
                    <button className="join-button" onClick={this.toggleLoginForm}>Sign In</button>
                    {this.state.showRegistrationForm && (<RegistrationForm />)}
                    {this.state.showLogInForm && (<Login />)}
                </div>

                <BrowserRouter>
                    <div>
                        <div>
                            <Route
                                exact
                                path="/registration"
                                component={RegistrationForm}
                            />
                        </div>
                        <Route path="/login" component={Login} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
