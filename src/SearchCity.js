import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class SearchCity extends React.Component {
    constructor() {
        super();
    }

    render() {
        // const  { firstname, lastname, email, password } = this.state;
        //send info to Redux
        return (
            <div className="form">
                <form className="pick-city">
                    <div className="form-inputs">
                        <input
                            onChange={this.handleChange}
                            name="city"
                            type="text"
                            placeholder="Choose a City"
                            className="form-element"
                        />
                        <br />
                        <button
                            onClick={this.handleSubmit}
                            className="form-button"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
