import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        starredUsers: state.starredUsers
    };
}
class UserComponentStarred extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="starred-flex">
                {this.props.starredUsers &&
                    this.props.starredUsers.map(starredUser => {
                        return (
                            <div className="user-component">
                                <Link to={`/user/${starredUser.id}`}>
                                    <div className="user-component-img">
                                        {starredUser.url && (
                                            <img
                                                src={`https://s3.amazonaws.com/bodyjamnetwork/${
                                                    starredUser.url
                                                }`}
                                            />
                                        )};
                                        {!starredUser.url && (
                                            <img src="placeholder-img.jpg" />
                                        )}; )}
                                    </div>
                                </Link>
                                <div className="user-component-name">
                                    {starredUser.firstname}, {starredUser.age},{' '}
                                    {starredUser.city}
                                </div>
                                <div className="user-component-languages">
                                    <span>
                                        Offering: {starredUser.nativelang1}
                                    </span>
                                    <br />
                                    <span>
                                        Looking for: {starredUser.targetlang1}
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

export default connect(mapStateToProps)(UserComponentStarred);
