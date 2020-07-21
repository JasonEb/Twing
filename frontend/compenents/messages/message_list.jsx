import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

// Actions
import { receiveMessages } from '../../actions/message_actions'
import { wsConnect } from '../../actions/websocket_actions'

// Selectors
import { allMessages } from '../../selectors/messageSelectors'



const MessageList = (props) => {
    let messages = useSelector( state => allMessages(state) )
    let items = messages.map( (message, idx) => <li key={idx}>{message}</li>)
    
    return <ul>
        <h1>Messages</h1>
        {items}
    </ul>
}

export default MessageList;