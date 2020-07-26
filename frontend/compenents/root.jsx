import React, { useState, useEffect } from 'react';

import { Provider } from 'react-redux';

import MessageList from './messages/message_list'
import Canvas from './canvas'

const Root = ({ store }) => {
    const [channel, setChannel] = useState("Testing Channel")

    useEffect(() => {
        setChannel("Updated Channel")
    }, []);

    return (
    <Provider store={store}>
        <h1>{channel}</h1>
        <MessageList />
        <Canvas />
    </Provider>
    )
}

export default Root;