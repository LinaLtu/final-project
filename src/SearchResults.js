import React from 'react';
import UserCompunentSearchByLanguage from './UserComponentSearchByLanguage';

export default class SearchResults extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-results">
                <UserCompunentSearchByLanguage />
            </div>
        );
    }
}
