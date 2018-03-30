import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SearchCity from './SearchCity';
import SearchLanguage from './SearchLanguage';
import SearchResults from './SearchResults';

export default class Pick extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pick">
                <h1>Find Your Tandem Partner</h1>
                <div className="find-tandem-pics">
                    <div className="find-tandem-pics-item-city">
                        <p>Pick A City</p>
                    </div>
                    <div className="find-tandem-pics-item-language">
                        <p>Pick a Language</p>
                    </div>
                </div>
                <SearchCity />
                <SearchLanguage />
                <SearchResults />
            </div>
        );
    }
}
