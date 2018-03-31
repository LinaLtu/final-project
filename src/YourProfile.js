import React from 'react';
import PicUpload from './PicUpload';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export default class YourProfile extends React.Component {
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
            showUploader: false
        };

        this.toggleStar = this.toggleStar.bind(this);
        this.toggleUploader = this.toggleUploader.bind(this);
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
        return (
            <div className="your-profile-main">
                <h1>{this.state.greeting}, user!</h1>
                <div className="your-profile-content">
                    <div className="profile-item-header">
                        <span className="star-img">
                            <img
                                onClick={this.toggleStar}
                                src={this.state.starImg}
                            />
                        </span>
                        <span>
                            <button className="join-button edit-button">
                                Edit your Profile
                            </button>
                        </span>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div className="profile-item-flex">
                        <div className="profile-pic">
                            <img
                                onClick={this.toggleUploader}
                                src="./placeholder-img.jpg"
                            />
                            <div className="change-picture">
                                {this.state.showUploader && (<PicUpload />)}
                            </div>
                        </div>
                        <div className="profile-info">Info here</div>
                    </div>
                </div>
            </div>
        );
    }
}
