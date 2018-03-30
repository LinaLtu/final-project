import React from 'react';

export default class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer">
                <p>&copy; 2018 Tandem Berlin</p>
                <p>By using this website, you accept that we use cookies.</p>
            </div>
        );
    }
}
