import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { insertUrlIntoDB } from './actions';

class PicUpload extends Component {
    constructor() {
        super();

        this.submitUploadImage = this.submitUploadImage.bind(this);
    }

    submitUploadImage(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', e.target.files[0]);

        this.props.dispatch(insertUrlIntoDB(formData));
    }

    render() {
        return <input type="file" onChange={this.submitUploadImage} />;
    }
}

export default connect(null)(PicUpload);
