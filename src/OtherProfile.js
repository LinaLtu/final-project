import React from 'react';
import SendMessage from './SendMessage';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { getOtherUserInfo, addStarredUser } from './actions';
import axios from 'axios';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

class OtherProfile extends React.Component {
    constructor() {
        super();

        this.state = {
            starImg: './star-white.jpg',
            sendMessage: false
        };

        this.toggleStar = this.toggleStar.bind(this);
        this.toggleSendMessage = this.toggleSendMessage.bind(this);
    }

    componentDidMount() {
        axios
            .get(`/get-other-user-info/${this.props.match.params.id}`)
            .then(
                this.props.dispatch(
                    getOtherUserInfo(this.props.match.params.id)
                )
            )
            .then(() => {
                console.log('From state to props ', this.props.users);
            });
        //dispatch an action
    }

    toggleStar() {
        if (this.state.starImg == './star-white.jpg') {
            this.setState({
                starImg: './star-yellow.jpg'
            });
        } else {
            this.setState({
                starImg: './star-white.jpg'
            });
        }
        console.log('From starred ', this.props.match.params.id);
        // this.props.dispatch(addStarredUser(this.props.match.params.id));
        axios
            .post(`/add-starred-user/${this.props.match.params.id}`)
            // .then(
            //     this.props.dispatch(
            //         getOtherUserInfo(this.props.match.params.id)
            //     )
            // )
            .then(() => {
                console.log('From add-starred-users');
            });
    }

    toggleSendMessage() {
        this.setState({ sendMessage: !this.state.sendMessage });
    }

    render() {
        if (!this.props.users) {
            return null;
        }
        return (
            <div className="other-user-profile-main">
                <h1>{this.props.users[0].firstname}</h1>
                <div className="other-user-profile-content">
                    <div className="profile-item-header">
                        <span className="star-img">
                            <img
                                onClick={this.toggleStar}
                                src={this.state.starImg}
                            />
                        </span>
                        <span>
                            <button
                                className="join-button edit-button send-message"
                                onClick={this.toggleSendMessage}
                            >
                                Send a Message
                            </button>
                        </span>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div className="profile-item-flex">
                        <div className="other-user-profile-pic">
                            <img src={this.props.users[0].url} />
                        </div>
                        <div className="profile-info">
                            <table className="profile-table">
                                <tr>
                                    <td className="table-label">Name:</td>
                                    <td>{this.props.users[0].firstname}</td>
                                </tr>
                                <tr>
                                    <td className="table-label">City:</td>
                                    <td>{this.props.users[0].city || 'n/a'}</td>
                                </tr>
                                <tr>
                                    <td className="table-label">Age:</td>
                                    <td>{this.props.users[0].age || 'n/a'}</td>
                                </tr>
                                <tr>
                                    <td className="table-label">
                                        I'm offering:
                                    </td>
                                    <td>
                                        {this.props.users[0].nativelang1 ||
                                            'n/a'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-label">
                                        I'm looking for:
                                    </td>
                                    <td>
                                        {this.props.users[0].targetlang1 ||
                                            'n/a'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-label">
                                        Fun fact about me:
                                    </td>
                                    <td>{this.props.users[0].fact || 'n/a'}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    {this.state.sendMessage && <SendMessage />}
                    <div className="edit-profile" />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(OtherProfile);
