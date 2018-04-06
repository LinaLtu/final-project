import React from 'react';
import UserCompunentSearchByLanguage from './UserComponentSearchByLanguage';
import UserComponentSearchByCity from './UserComponentSearchByCity';

export default class SearchResults extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-results">
                <UserCompunentSearchByLanguage />
                <UserComponentSearchByCity />
            </div>
        );
    }
}
