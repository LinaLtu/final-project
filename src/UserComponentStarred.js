import React from 'react';
import { connect } from 'react-redux';

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
                                <div className="user-component-img" />
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
// {starredUser.url && (
//     <img src= "https://s3.amazonaws.com/bodyjamnetwork/+ {starredUser.url}"
//          ||
//     'placeholder-img.jpg' />
//     }
//
// )}

export default connect(mapStateToProps)(UserComponentStarred);
