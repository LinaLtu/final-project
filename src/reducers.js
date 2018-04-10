export default function(state = {}, action) {
    if (action.type == 'GET_USER_INFO') {
        state = Object.assign({}, state, {
            users: action.users
        });
    }

    if (action.type == 'GET_OTHER_USER_INFO') {
        state = Object.assign({}, state, {
            users: action.users
        });
    }

    if (action.type == 'INSERT_URL_INTO_DB') {
        state = Object.assign({}, state, {
            users: state.users.map(function(user) {
                if (user.id === action.id) {
                    return {
                        ...user,
                        url: action.image
                    };
                } else {
                    return user;
                }
            })
        });
    }

    if (action.type == 'GET_STARRED_USERS') {
        state = Object.assign({}, state, {
            starredUsers: action.users
        });
    }

    if (action.type == 'SEND_MESSAGE') {
        state = Object.assign({}, state, {
            message: action.message
        });
    }

    if (action.type == 'GET_MESSAGES') {
        state = Object.assign({}, state, {
            messages: action.messages
        });
    }

    if (action.type == 'GET_SENT_MESSAGES') {
        state = Object.assign({}, state, {
            sentMessages: action.sentMessages
        });
    }

    if (action.type == 'GET_SELECTED_USERS') {
        state = Object.assign({}, state, {
            selectedUsers: action.selectedUsers
        });
    }

    if (action.type == 'SEARCH_BY_LANGUAGE') {
        state = Object.assign({}, state, {
            usersSearchByLanuage: action.usersSearchByLanuage
        });
    }

    if (action.type == 'SEARCH_BY_CITY') {
        state = Object.assign({}, state, {
            usersSearchByCity: action.usersSearchByCity
        });
    }

    return state;
}
