import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        usersSearchByCity: state.usersSearchByCity
    };
}
class UserComponentSearchByCity extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="starred-flex">
                {this.props.usersSearchByCity &&
                    this.props.usersSearchByCity.map(userSearchByCity => {
                        return (
                            <div className="user-component">
                                <Link to={`/user/${userSearchByCity.id}`}>
                                    <div className="user-component-img">
                                        {userSearchByCity.url && (
                                            <img
                                                src={`https://s3.amazonaws.com/bodyjamnetwork/${
                                                    userSearchByCity.url
                                                }`}
                                            />
                                        )};
                                        {!userSearchByCity.url && (
                                            <img src="placeholder-img.jpg" />
                                        )}; )}
                                    </div>
                                </Link>
                                <div className="user-component-name">
                                    {userSearchByCity.firstname},{' '}
                                    {userSearchByCity.age},{' '}
                                    {userSearchByCity.city}
                                </div>
                                <div className="user-component-languages">
                                    <span>
                                        Offering: {userSearchByCity.nativelang1}
                                    </span>
                                    <br />
                                    <span>
                                        Looking for:{' '}
                                        {userSearchByCity.targetlang1}
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

export default connect(mapStateToProps)(UserComponentSearchByCity);
