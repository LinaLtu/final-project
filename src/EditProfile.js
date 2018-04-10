import React from 'react';
import PicUpload from './PicUpload';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { editProfileInfo } from './actions';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

class EditProfile extends React.Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            password: '',
            nativelang1: '',
            nativelang2: '',
            nativelang3: '',
            targetlang1: '',
            targetlang2: '',
            targetlang3: '',
            city: '',
            age: null,
            fact: '',
            error: false,
            messageToUser: false
        };

        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState(this.props.users[0]);
    }

    handleChange(e) {
        console.log('inside handleChange', e);
        this.setState({ [e.target.name]: e.target.value });
    }

    onChange(e) {
        console.log('Inside onChange', e);
    }
    onItemClick(e) {
        e.currentTarget.style.backgroundColor = 'pink';
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
            .dispatch(editProfileInfo(this.state))
            .then(this.setState({ messageToUser: true }))
            .then(() =>
                console.log('Profile updated', this.state.messageToUser)
            );
    }

    render() {
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
                            value={this.state.firstname || ''}
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
                            value={this.state.city || ''}
                        />
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="age"
                            type="text"
                            placeholder="Age"
                            className="form-element"
                            value={this.state.age || ''}
                        />
                        <br />
                        <div>
                            <input
                                onChange={this.handleChange}
                                name="nativelang1"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element smaller"
                                style={{ width: '86%' }}
                                value={this.state.nativelang1 || ''}
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
                                name="nativelang2"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                                style={{ width: '86%' }}
                                value={this.state.nativelang2 || ''}
                            />{' '}
                            <span className="add-lang">+</span>
                        </div>
                        <div className="hidden">
                            <input
                                onChange={this.handleChange}
                                name="nativelang3"
                                type="text"
                                placeholder="Language you are offering"
                                className="form-element"
                                value={this.state.nativelang3 || ''}
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
                                value={this.state.targetlang1 || ''}
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
                                value={this.state.targetlang2 || ''}
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
                                value={this.state.targetlang3 || ''}
                            />
                        </div>
                        <br />
                        <input
                            onChange={this.handleChange}
                            name="fact"
                            type="text"
                            placeholder="Fun Fact about Me"
                            className="form-element"
                            value={this.state.fact || ''}
                        />
                        <br />
                        {this.state.messageToUser && (
                            <div className="message-sent">
                                Your profile has been updated!
                            </div>
                        )}
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
