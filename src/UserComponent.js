import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        starredUsers: state.starredUsers
    };
}
class UserCompunent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="user-component">
                    <div className="user-component-img">
                        <img src="./placeholder-img.jpg" />
                    </div>
                    <div className="user-component-name">Name: Levante</div>
                    <div className="user-component-languages">
                        <span>Offering: Italian, English, Portugese</span>
                        <br />
                        <span>Looking for: German, Spanish, Dutch</span>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserCompunent);
