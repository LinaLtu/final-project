import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class SearchLanguage extends React.Component {
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
                        <h1>Choose a Language</h1>

                        <select name="cars" className="form-element">
                            <option value="english" name="english">
                                English
                            </option>
                            <option value="german" name="german">
                                German
                            </option>
                            <option value="spanish" name="spanish">
                                Spanish
                            </option>
                            <option value="italian" name="italian">
                                Italian
                            </option>
                            <option value="french" name="french">
                                French
                            </option>
                            <option value="turkish" name="turkish">
                                Turkish
                            </option>
                            <option value="lithuanian" name="lithuanian">
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
