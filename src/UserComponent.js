import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        selectedUsers: state.selectedUsers
    };
}
class UserCompunent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="selected-flex">
                {this.props.selectedUsers &&
                    this.props.selectedUsers.map(selectedUser => {
                        return (
                            <div className="user-component">
                                <Link to={`/user/${selectedUser.id}`}>
                                    <div className="user-component-img">
                                        {selectedUser.url && (
                                            <img
                                                src={`https://s3.amazonaws.com/bodyjamnetwork/${
                                                    selectedUser.url
                                                }`}
                                            />
                                        )};
                                        {!selectedUser.url && (
                                            <img src="placeholder-img.jpg" />
                                        )}; )}
                                    </div>
                                </Link>
                                <div className="user-component-name">
                                    {selectedUser.firstname}, {selectedUser.age},{' '}
                                    {selectedUser.city}
                                </div>
                                <div className="user-component-languages">
                                    <span>
                                        Offering: {selectedUser.nativelang1}
                                    </span>
                                    <br />
                                    <span>
                                        Looking for: {selectedUser.targetlang1}
                                    </span>
                                    <br />
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserCompunent);
