import React from 'react';

export default class SearchResults extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-results">
                <h1>Here are your search results</h1>
                <h2>User1</h2>
                <h2>User2</h2>
                <h2>User3</h2>
            </div>
        );
    }
}
