import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchByLanguage } from './actions';

class SearchLanguage extends React.Component {
    constructor() {
        super();

        this.state = {
            targetlang: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(searchByLanguage(this.state.targetlang));
    }

    handleChange(e) {
        this.setState({ targetlang: e.target.value });
    }

    render() {
        return (
            <div className="form">
                <form className="pick-city">
                    <div className="form-inputs">
                        <h1>Choose a Language</h1>

                        <select
                            name="cars"
                            className="form-element"
                            onChange={this.handleChange}
                        >
                            <option value="English" name="english">
                                English
                            </option>
                            <option value="German" name="german">
                                German
                            </option>
                            <option value="Spanish" name="spanish">
                                Spanish
                            </option>
                            <option value="Italian" name="italian">
                                Italian
                            </option>
                            <option value="French" name="french">
                                French
                            </option>
                            <option value="Turkish" name="turkish">
                                Turkish
                            </option>
                            <option value="Lithuanian" name="lithuanian">
                                Lithuanian
                            </option>
                        </select>
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

export default connect(null)(SearchLanguage);
