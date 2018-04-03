import React from 'react';
import PicUpload from './PicUpload';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

class EditProfile extends React.Component {
    constructor() {
        super();
    }

    onItemClick(e) {
        e.currentTarget.style.backgroundColor = 'pink';
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("Edit form submitted");

        this.props.dispatch(editProfileInfo());

        
        //
        // axios
        //     .post(`/edit-profile`)
        //     .then(
        //         this.props.dispatch(
        //             getOtherUserInfo(this.props.match.params.id)
        //         )
        //     )
        //     .then(() => {
        //         console.log('From state to props ', this.props.users);
        //     });

    }

    handleChange(e) {
        console.log(e);
    }

    render() {
        // const  { firstname, lastname, email, password } = this.state;
        //send info to Redux
        return (
            <div className="form">
                <form className="edit-profile-form">
                    <h1>Edit your Profile</h1>
                    <div className="form-inputs">
                        <input
                            onChange={this.handleChange}
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            className="form-element"
                            value={this.props.users[0].firstname}
                        />
                        <input
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-element"

                        />
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="city"
                            type="text"
                            placeholder="City"
                            className="form-element"
                            value={this.props.users[0].city || ""}
                        />
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="age"
                            type="text"
                            placeholder="Age"
                            className="form-element"
                            value={this.props.users[0].age || ""}
                        />
                        <br />
                        <div>
                            <input
                                onChange={this.handleChange}
                                name="nativlang1"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element smaller"
                                style={{ width: '86%' }}
                                value={this.props.users[0].nativlang1 || ""}
                            />{' '}
                            <span
                                className="add-lang"
                                onClick={this.onItemClick}
                            >
                                +
                            </span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="nativlang2"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                                style={{ width: '86%' }}
                                value={this.props.users[0].nativlang2 || ""}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="nativlang3"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                                value={this.props.users[0].nativlang3 || ""}
                            />
                        </div>
                        <div>
                            <input
                                onChange={this.handleChange}
                                name="targetlang1"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element smaller"
                                style={{ width: '86%' }}
                                value={this.props.users[0].targetlang1 || ""}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="targetlang2"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element"
                                style={{ width: '86%' }}
                                value={this.props.users[0].targetlang2 || ""}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="targetlang3"
                                type="text"
                                placeholder="Language you would like to practice"
                                className="form-element hidden"
                                value={this.props.users[0].targetlang3 || ""}
                            />
                        </div>
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="fact"
                            type="text"
                            placeholder="Fun Fact about Me"
                            className="form-element"
                            value={this.props.users[0].fact || ""}
                        />
                        <span className="upload-span">
                            Upload your Picture:{' '}
                        </span>
                        <PicUpload />
                        <br />
                        <button
                            onClick={this.handleSubmit}
                            className="form-button"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditProfile);
