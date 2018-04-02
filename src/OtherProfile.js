import React from 'react';
import SendMessage from './SendMessage';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class OtherProfile extends React.Component {
    constructor() {
        super();

        this.state = {
            starImg: './star-white.jpg',
            sendMessage: false
        };

        this.toggleStar = this.toggleStar.bind(this);
        this.toggleSendMessage = this.toggleSendMessage.bind(this);
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
    }

    toggleSendMessage() {
        this.setState({ sendMessage: !this.state.sendMessage });
    }

    render() {
        return (
            <div className="other-user-profile-main">
                <h1>User name</h1>
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
                                className="join-button edit-button"
                                onClick={this.toggleSendMessage}
                            >
                                Send a Message
                            </button>
                        </span>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div className="profile-item-flex">
                        <div className="other-user-profile-pic">
                            <img src="./placeholder-img.jpg" />
                        </div>
                        <div className="profile-info">
                            <table className="profile-table">
                                <tr>
                                    <td className="table-label">Name:</td>
                                    <td>Levante</td>
                                </tr>
                                <tr>
                                    <td className="table-label">City:</td>
                                    <td>Catania</td>
                                </tr>
                                <tr>
                                    <td className="table-label">Age:</td>
                                    <td>31</td>
                                </tr>
                                <tr>
                                    <td className="table-label">
                                        I'm offering:
                                    </td>
                                    <td>Italian</td>
                                </tr>
                                <tr>
                                    <td className="table-label">
                                        I'm looking for:
                                    </td>
                                    <td>Spanish</td>
                                </tr>
                                <tr>
                                    <td className="table-label">
                                        Fun fact about me:
                                    </td>
                                    <td>I've never been to Palermo </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    {this.state.sendMessage && <SendMessage />}
                    <SendMessage />
                    <div className="edit-profile" />
                </div>
            </div>
        );
    }
}
