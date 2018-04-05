import axios from './axios';

export function getUserInfo() {
    return axios.get('/get-user-info').then(function({ data }) {
        return {
            type: 'GET_USER_INFO',
            users: data.data
        };
    });
}

export function getOtherUserInfo(id) {
    return axios.get('/get-other-user-info/' + id).then(function({ data }) {
        return {
            type: 'GET_OTHER_USER_INFO',
            users: data.data
        };
    });
}

export function insertUrlIntoDB(formData) {
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
        return {
            type: 'GET_MESSAGES',
            messages: data.messages
        };
    });
}

export function getSelectedUsers(targetlang) {
    console.log('Hello from getSelectedUsers in actions');
    return axios
        .get('/get-selected-users/' + targetlang)
        .then(function({ data }) {
            return {
                type: 'GET_SELECTED_USERS',
                users: data.data
            };
        });
}
