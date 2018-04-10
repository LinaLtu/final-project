import React from 'react';
import UserComponent from './UserComponent';
import { getSelectedUsers } from './actions';
import { connect } from 'react-redux';

class SelectedUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.props.dispatch(getSelectedUsers(this.props.targetLang));

        return (
            <div className="starred-users" id="yourTandem">
                <h1>People You Might be Interested to Meet</h1>
                <UserComponent />
            </div>
        );
    }
}

export default connect(null)(SelectedUsers);
