import axios from './axios';

export function getUserInfo() {
    console.log('From Actions before axios');
    return axios.get('/get-user-info').then(function({ data }) {
        console.log('From Actions', data);
        return {
            type: 'GET_USER_INFO',
            users: data.data
        };
    });
}

export function getOtherUserInfo(id) {
    console.log('We are in getOtherUserInfo in ACTION');
    return axios.get('/get-other-user-info/' + id).then(function({ data }) {
        return {
            type: 'GET_OTHER_USER_INFO',
            users: data.data
        };
    });
}

export function insertUrlIntoDB(formData) {
    console.log('We are in insertUrlIntoDB in ACTION');
    return axios.post('/upload', formData).then(function({ data }) {
        console.log('From insertUrl', data);
        return {
            type: 'INSERT_URL_INTO_DB',
            image: data.data,
            id: data.id
        };
    });
}

export function editProfileInfo(data) {
    return axios.put('/users-me', data).then(function({ message }) {
        return {
            type: 'INSERT_INTO_STARRED',
            users: data.data
        };
    });
}

export function addStarredUser(id) {
    console.log('From  addStarredUser in ACTION');
    return axios.post('/add-starred-user/' + id).then(function({ data }) {
        return {
            type: 'INSERT_INTO_STARRED',
            users: data.data
        };
    });
}

export function getStarredUsers() {
    return axios.get('/get-starred-users').then(function({ data }) {
        return {
            type: 'GET_STARRED_USERS',
            users: data.data
        };
    });
}

export function sendMessage(id, message) {
    console.log('from sendMessage in action HEEEEEREEEE', message);
    return axios.post('/send-message/' + id, { message }).then(() => {
        console.log('From THE ACTION ', { message });
        return {
            type: 'SEND_MESSAGE',
            message: message
        };
    });
}

export function getMessages() {
    return axios.get('/get-messages').then(function({ data }) {
        console.log('From ACTION GET MESSAGES ', data);
        return {
            type: 'GET_MESSAGES',
            messages: data.messages
        };
    });
}
