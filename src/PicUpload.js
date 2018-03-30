import React, { Component } from 'react';
import axios from 'axios';

export default class PicUpload extends Component {
    constructor() {
        super();
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
