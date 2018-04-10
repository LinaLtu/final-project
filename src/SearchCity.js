import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchByCity } from './actions';

class SearchCity extends React.Component {
    constructor() {
        super();

        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ city: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.dispatch(searchByCity(this.state.city));
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

export default connect(null)(SearchCity);
