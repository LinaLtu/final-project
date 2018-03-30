import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class RegistrationForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        // const  { firstname, lastname, email, password } = this.state;
        //send info to Redux
        return (
            <div className="form">
                <form className="registration-form">
                    <h1>We're glad to see you again!</h1>
                    <div className="form-inputs">
                        <input
                            onChange={this.handleChange}
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            className="form-element"
                        />
                        <input
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-element"
                        />
                        <br />
                        <button
                            onClick={this.handleSubmit}
                            className="form-button"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
