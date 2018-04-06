import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        usersSearchByLanuage: state.usersSearchByLanuage
    };
}
class UserCompunentSearchByLanguage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="starred-flex">
                {this.props.usersSearchByLanuage &&
                    this.props.usersSearchByLanuage.map(userSearchByLanuage => {
                        return (
                            <div className="user-component">
                                <Link to={`/user/${userSearchByLanuage.id}`}>
                                    <div className="user-component-img">
                                        {userSearchByLanuage.url && (
                                            <img
                                                src={`https://s3.amazonaws.com/bodyjamnetwork/${
                                                    userSearchByLanuage.url
                                                }`}
                                            />
                                        )};
                                        {!userSearchByLanuage.url && (
                                            <img src="placeholder-img.jpg" />
                                        )}; )}
                                    </div>
                                </Link>
                                <div className="user-component-name">
                                    {userSearchByLanuage.firstname},{' '}
                                    {userSearchByLanuage.age},{' '}
                                    {userSearchByLanuage.city}
                                </div>
                                <div className="user-component-languages">
                                    <span>
                                        Offering:{' '}
                                        {userSearchByLanuage.nativelang1}
                                    </span>
                                    <br />
                                    <span>
                                        Looking for:{' '}
                                        {userSearchByLanuage.targetlang1}
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

export default connect(mapStateToProps)(UserCompunentSearchByLanguage);
