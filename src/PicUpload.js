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
        console.log(
            'We are in submitUploadImage, file should be appended',
            e.target.files[0]
        );
        this.props.dispatch(insertUrlIntoDB(formData));
    }

    // submitUploadImage(e) {
    //     console.log(e.target);
    //     e.preventDefault();
    //     let formData = new FormData();
    //     formData.append('file', e.target.files[0]);
    //     // axios post request to send the data along with it
    //     axios.post('/upload', formData).then(res => {
    //         this.props.changeImageUrl(res.data.data);
    //         //
    //         console.log(this.state);
    //     });
    // }

    render() {
        return <input type="file" onChange={this.submitUploadImage} />;
    }
}

export default connect(null)(PicUpload);
