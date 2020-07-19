import React, { useState, useEffect } from 'react';

import { Provider } from 'react-redux';

import MessageListContainer from '../compenents/messages/message_list_container'

const Root = ({ store }) => {
    const [channel, setChannel] = useState("Testing Channel")

    useEffect(() => {
        setChannel("Updated Channel")
    });

    return (
    <Provider store={store}>
        <h1>{channel}</h1>
        <MessageListContainer />
    </Provider>
    )
}

export default Root;