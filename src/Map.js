import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Map extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="map-main">
                <h1>Find Your Language Exchange Partner Whenever You Are!</h1>
                <div className="map">
                    <img src="map.jpg" />
                </div>
            </div>
        );
    }
}
