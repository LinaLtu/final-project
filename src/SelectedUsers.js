import React from 'react';
import UserComponent from './UserComponent';
import { getSelectedUsers } from './actions';
import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {
//         selectedUsers: state.starredUsers
//     };
// }

class SelectedUsers extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     targetLang: ''
        // };
    }

    componentDidMount() {
        // console.log('We are shipping of target lang: ', this.props);
        // this.props.dispatch(getSelectedUsers(this.props.targetLang));
    }

    render() {
        console.log('We are shipping of target lang, 12:15: ', this.props);
        this.props.dispatch(getSelectedUsers(this.props.targetLang));

        // console.log(
        //     'From Selected users my city for the query',
        //     this.props.myCity,
        //     this.props.targetLang
        // );
        return (
            <div className="starred-users" id="yourTandem">
                <h1>People You Might be Interested to Meet</h1>
                <div className="starred-flex">
                    <UserComponent />
                </div>
            </div>
        );
    }
}

export default connect(null)(SelectedUsers);
