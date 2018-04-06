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
                {this.props.showSearchCity && <UserComponentSearchByCity />}
                {this.props.showSearchLanguage && (
                    <UserCompunentSearchByLanguage />
                )}
            </div>
        );
    }
}
