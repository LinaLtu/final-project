import React from 'react';
import PicUpload from './PicUpload';
import { HashRouter, Route } from 'react-router-dom';

export default class RegistrationForm extends React.Component {
    constructor() {
        super();
    }

    onItemClick(e) {
        e.currentTarget.style.backgroundColor = 'pink';
    }

    // handleChange(e) {
    //     console.log(e);
    // }

    render() {
        // const  { firstname, lastname, email, password } = this.state;
        //send info to Redux
        return (
            <div className="form">
                <form className="registration-form">
                    <h1>A couple of things about you...</h1>
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
                        <div>
                            <input
                                onChange={this.handleChange}
                                name="nativlang1"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element smaller"
                                style={{ width: '86%' }}
                            />{' '}
                            <span
                                className="add-lang"
                                onClick={this.onItemClick}
                            >
                                +
                            </span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="nativlang2"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="nativlang3"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                            />
                        </div>
                        <div>
                            <input
                                onChange={this.handleChange}
                                name="targetlang1"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element smaller"
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="targetlang2"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element"
                                style={{ width: '86%' }}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="targetlang3"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element hidden"
                            />
                        </div>
                        <input
                            onChange={this.handleChange}
                            name="city"
                            type="text"
                            placeholder="City"
                            className="form-element"
                        />
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="age"
                            type="text"
                            placeholder="Age"
                            className="form-element"
                        />
                        <br />
                        <span className="upload-span">
                            Upload your Picture:{' '}
                        </span>
                        <PicUpload />
                        <br />
                        <button
                            onClick={this.handleSubmit}
                            className="form-button"
                        >
                            Join Now!
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
