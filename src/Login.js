import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios';

export default class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        axios
            .post('/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(results => {
                console.log('Success', results.data);
                if (results.data.success == false) {
                    this.setState({ error: true });
                } else {
                    location.replace('/profile');
                }
            });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                            onChange={this.onChange}
                            name="email"
                            type="text"
                            placeholder="Email Address"
                            className="form-element"
                        />
                        <input
                            onChange={this.onChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-element"
                        />
                        <br />
                        <button onClick={this.onSubmit} className="form-button">
                            Log In
                        </button>
                    </div>
                </form>
                {this.state.error && (
                    <div className="error">Something went wrong</div>
                )}
            </div>
        );
    }
}
