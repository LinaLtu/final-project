import React from 'react';

export default class UserCompunent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="user-component">
                <div className="user-component-img">
                    <img src="./placeholder-img.jpg" />
                </div>
                <div className="user-component-name">Levante, 31, Catania</div>
                <div className="user-component-languages">
                    <span>Offering: Italian, English, Portugese</span>
                    <br />
                    <span>Looking for: German, Spanish, Dutch</span>
                    <br />
                </div>
            </div>
        );
    }
}
