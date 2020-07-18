import React from 'react';

import { Provider } from 'react-redux';

import MessageListContainer from '../compenents/messages/message_list_container'

const Root = ({ store }) => (
    <Provider store={store}>
        <h1>Testing Twing Store</h1>
        <MessageListContainer />
    </Provider>
)

export default Root;