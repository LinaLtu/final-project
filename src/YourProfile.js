import React from 'react';
import PicUpload from './PicUpload';
import EditProfile from './EditProfile';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

//how do I change this?
// changeImageUrl(url) {
//        this.setState({
//            url: url
//        });
//    }

class YourProfile extends React.Component {
    constructor() {
        super();

        this.state = {
            greeting: [
                'Labas',
                'Hello',
                'Ciao',
                'Hej',
                'Ahoj',
                'Saluton',
                'Salut',
                'Shalom',
                'Szia',
                "Kon'nichiwa",
                'Sveiki',
                'Hei',
                'Cześć',
                'Oi',
                'Hola',
                'Alo'
            ],
            starImg: './star-white.jpg',
            showUploader: false,
            editProfile: false
        };

        this.toggleStar = this.toggleStar.bind(this);
        this.toggleUploader = this.toggleUploader.bind(this);
        this.toggleEditForm = this.toggleEditForm.bind(this);
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
    toggleUploader() {
        this.setState({ showUploader: !this.state.showUploader });
    }

    toggleEditForm() {
        this.setState({ editProfile: !this.state.editProfile });
    }

    uploadPicture() {
        //uploa
    }

    componentDidMount() {
        let index = '';
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        index = getRandomInt(15);

        this.setState({
            greeting: this.state.greeting[index]
        });

        console.log(this.state.starImg);
    }

    render() {
        if (!this.props.users) {
            return null;
        }

        console.log('From app ', this.props);

        return (
            <div className="your-profile-main">
                <h1>
                    {this.state.greeting}, {this.props.users[0].firstname}!
                </h1>
                <div className="your-profile-content">
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
                                onClick={this.toggleEditForm}
                            >
                                Edit your Profile
                            </button>
                        </span>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div className="profile-item-flex">
                        <div className="profile-pic">
                            <img
                                onClick={this.toggleUploader}
                                src={
                                    this.props.users[0].url ||
                                    '"./placeholder-img.jpg"'
                                }
                            />
                            <div className="change-picture">
                                {this.state.showUploader && (
                                    <PicUpload
                                        changeImageUrl={this.changeImageUrl}
                                    />
                                )}
                            </div>
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
                    {this.state.editProfile && <EditProfile />}
                    <div className="edit-profile" />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(YourProfile);
