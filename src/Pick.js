import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SearchCity from './SearchCity';
import SearchLanguage from './SearchLanguage';
import SearchResults from './SearchResults';

export default class Pick extends React.Component {
    constructor() {
        super();

        this.state = {
            showSearchCity: false,
            showSearchLanguage: false
        };

        this.toggleSearchCity = this.toggleSearchCity.bind(this);
        this.toggleSearchLanguage = this.toggleSearchLanguage.bind(this);
    }

    toggleSearchCity() {
        if (this.state.showSearchLanguage === true) {
            this.setState({
                showSearchLanguage: false
            });
        }
        this.setState({
            showSearchCity: !this.state.showSearchCity
        });
    }

    toggleSearchLanguage() {
        if (this.state.showSearchCity === true) {
            this.setState({
                showSearchCity: false
            });
        }
        this.setState({
            showSearchLanguage: !this.state.showSearchLanguage
        });
    }

    render() {
        return (
            <div className="pick">
                <h1>Find Your Tandem Partner</h1>
                <div className="find-tandem-pics">
                    <div
                        id="pickcity"
                        className="find-tandem-pics-item-city"
                        onClick={this.toggleSearchCity}
                    >
                        <p>Pick A City</p>
                    </div>
                    <div
                        id="picklanguage"
                        className="find-tandem-pics-item-language"
                        onClick={this.toggleSearchLanguage}
                    >
                        <p>Pick a Language</p>
                    </div>
                </div>
                {this.state.showSearchCity && <SearchCity />}
                {this.state.showSearchLanguage && <SearchLanguage />}
                <SearchResults />
            </div>
        );
    }
}
