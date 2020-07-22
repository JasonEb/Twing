import React, { useState, useEffect } from 'react';

import { Provider } from 'react-redux';

import MessageList from '../compenents/messages/message_list'

const Root = ({ store }) => {
    const [channel, setChannel] = useState("Testing Channel")

    useEffect(() => {
        setChannel("Updated Channel")
    }, []);

    return (
    <Provider store={store}>
        <h1>{channel}</h1>
        <MessageList />
    </Provider>
    )
}

export default Root;