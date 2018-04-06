export default function(state = {}, action) {
    if (action.type == 'GET_USER_INFO') {
        state = Object.assign({}, state, {
            users: action.users
        });
        //console.log("State from action", state.users[0].firstname);
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

    if (action.type == 'INSERT_INTO_STARRED') {
        // state = Object.assign({}, state, {
        //     users: state.users.map(function(user) {
        //         if (user.id === action.id) {
        //             return {
        //                 ...user,
        //                 url: action.image
        //             };
        //         } else {
        //             return user;
        //         }
        //     })
        // });
    }

    if (action.type == 'GET_STARRED_USERS') {
        console.log('GET_STARRED_USERS in reducers');

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

        console.log('from GET_MESSAGES ', state.messages);
    }

    if (action.type == 'GET_SENT_MESSAGES') {
        console.log('about to change the STEATEEA', action);
        state = Object.assign({}, state, {
            sentMessages: action.sentMessages
        });

        console.log('from GET_SENT_MESSAGES ', state.sentMessages);
    }

    if (action.type == 'GET_SELECTED_USERS') {
        state = Object.assign({}, state, {
            selectedUsers: action.selectedUsers
        });
        console.log('GET_SELECTED_USERS in reducers', state);
    }

    if (action.type == 'SEARCH_BY_LANGUAGE') {
        state = Object.assign({}, state, {
            usersSearchByLanuage: action.usersSearchByLanuage
        });
        console.log('SEARCH_BY_LANGUAGE in reducers', state);
    }

    return state;
}
//
//     if (action.type == 'ACCEPT_REQUEST') {
//         state = Object.assign({}, state, {
//             users: state.users.map(function(user) {
//                 if (user.id == action.id) {
//                     ////what should I look at here?
//                     return {
//                         ...user,
//                         status: 2
//                     };
//                 } else {
//                     return user;
//                 }
//             })
//         });
//     }
//
//     if (action.type == 'END_FRIENDSHIP') {
//         state = Object.assign({}, state, {
//             users: state.users.map(function(user) {
//                 if (user.id == action.id) {
//                     return {
//                         ...user,
//                         status: 0
//                     };
//                 } else {
//                     return user;
//                 }
//             })
//         });
//     }
//
//     if (action.type == 'REJECT_REQUEST') {
//         state = Object.assign({}, state, {
//             users: state.users.map(function(user) {
//                 if (user.id == action.id) {
//                     return {
//                         ...user,
//                         status: 3
//                     };
//                 } else {
//                     return user;
//                 }
//             })
//         });
//     }
//
//     if (action.type == 'ONLINE_USERS') {
//         state = Object.assign({}, state, {
//             visitors: action.visitors
//         });
//     }
//
//     if (action.type == 'USER_JOINED') {
//         state = Object.assign({}, state, {
//             visitors: state.visitors.concat(action.visitors)
//         });
//     }
//
//     if (action.type == 'USER_LEFT') {
//         console.log('Action', action);
//         //action.id == id of the user who has left
//         var newVisitors = state.visitors.filter(function(visitor) {
//             return visitor.id != action.id;
//         });
//         // console.log('New visitors2 ', newVisitors);
//         state = Object.assign({}, state, {
//             visitors: newVisitors
//         });
//     }
//     // console.log('State ', state);
//
//     if (action.type == 'CHAT_MESSAGE') {
//         // console.log('From reducer ', state);
//         state = Object.assign({}, state, {
//             chatMessages: [...state.chatMessages, action.message]
//         });
//     }
//
//     if (action.type === 'CHAT_MESSAGES') {
//         console.log('From the messages ', action);
//         state = Object.assign({}, state, {
//             chatMessages: action.messages
//         });
//     }
//
//     return state;
// }
//
// // if (action.type == 'RECEIVE_FRIENDSHIP_REQUESTS') {
// //     return {
// //         ...state,
// //         users: state.users.map(function(user) {
// //             if (user.id == action.id) {
// //                 return {
// //                     ...user,
// //                     hot: action.type == 'MAKE_HOT' //it will be true if type is MAKE_HOT, otherwise it will be false
// //                 };
// //             } else {
// //                 return user;
// //             }
// //         })
// //     };
// // }
