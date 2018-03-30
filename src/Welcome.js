import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class Welcome extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="welcome">
                <h1>
                    <blockquote cite="Geoffrey Willans">
                        You can never understand one language until you
                        understand at least two. ‒Geoffrey Willans
                    </blockquote>
                </h1>
            </div>
        );
    }
}
