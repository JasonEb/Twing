import React from 'react';
import { useState, useEffect } from 'react';

const MessageList = (props) => {
    let {messages, connectAndJoin } = props
    let items = messages.map( (message, idx) => <li key={idx}>{message}</li>)

    useEffect((connectAndJoin) => {
        debugger
        connectAndJoin()
    })
    
    return <ul>
        <h1>Messages</h1>
        {items}
    </ul>
}

export default MessageList;