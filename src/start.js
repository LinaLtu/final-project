import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './reducers';
import Profile from './Profile';
import OtherUserProfile from './OtherUserProfile';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

const elem = (
    <Provider store={store}>
        <App />
    </Provider>
);


    ReactDOM.render(elem, document.querySelector('main'));
// ReactDOM.render(elem, document.querySelector('main'));
