import React from 'react';
import PicUpload from './PicUpload';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios';

export default class RegistrationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            firtsname: '',
            password: '',
            nativelang1: '',
            nativelang2: '',
            nativelang3: '',
            targetlang1: '',
            targetlang2: '',
            targetlang3: '',
            city: '',
            age: null,
            fact: '',
            error: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        axios
            .post('/registration', {
                firstname: this.state.firstname,
                email: this.state.email,
                password: this.state.password,
                nativelang1: this.state.nativelang1,
                nativelang2: this.state.nativelang2,
                nativelang3: this.state.nativelang3,
                targetlang1: this.state.targetlang1,
                targetlang2: this.state.targetlang2,
                targetlang3: this.state.targetlang3,
                city: this.state.city,
                age: this.state.age,
                fact: this.state.fact
            })
            .then(() => {
                location.replace('/profile');
            });
    }

    render() {
        return (
            <div className="form">
                <form className="registration-form">
                    <h1>A couple of things about you...</h1>
                    <div className="form-inputs">
                        <input
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            className="form-element"
                            onChange={this.onChange}
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="Email Address"
                            className="form-element"
                            onChange={this.onChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-element"
                            onChange={this.onChange}
                        />
                        <br />
                        <div>
                            <input
                                name="nativelang1"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element smaller"
                                onChange={this.onChange}
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                name="nativelang2"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                                onChange={this.onChange}
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                name="nativelang3"
                                type="text"
                                placeholder="Language you are offering"
                                onChange={this.onChange}
                                className="form-element"
                            />
                        </div>
                        <div>
                            <input
                                name="targetlang1"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element smaller"
                                onChange={this.onChange}
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                name="targetlang2"
                                type="text"
                                placeholder="Language you would like to practice"
                                onChange={this.onChange}
                                className="form-element"
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                name="targetlang3"
                                type="text"
                                placeholder="Language you would like to practice"
                                onChange={this.onChange}
                                className="form-element hidden"
                            />
                        </div>
                        <input
                            name="city"
                            type="text"
                            placeholder="City"
                            className="form-element"
                            onChange={this.onChange}
                        />
                        <br />
                        <input
                            name="age"
                            type="text"
                            placeholder="Age"
                            className="form-element"
                            onChange={this.onChange}
                        />
                        <br />
                        <input
                            name="fact"
                            type="text"
                            placeholder="Fun Fact about Me"
                            className="form-element"
                            onChange={this.onChange}
                        />
                        <span className="upload-span">
                            Upload your Picture:{' '}
                        </span>
                        <PicUpload />
                        <br />
                        <button onClick={this.onSubmit} className="form-button">
                            Join Now!
                        </button>
                    </div>
                </form>
                {this.state.error && (
                    <div className="error">Something went wrong. Ty again!</div>
                )}
            </div>
        );
    }
}
