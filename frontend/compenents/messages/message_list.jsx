import React from 'react';

const MessageList = ({messages}) => {
    let items = messages.map( (message) => <li>{message}</li>)
    return <ul>
        <h1>Messages</h1>
        {items}
    </ul>
}

export default MessageList;