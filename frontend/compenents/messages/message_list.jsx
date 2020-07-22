import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { receiveMessage } from '../../actions/message_actions'
import { wsConnect } from '../../actions/websocket_actions'

// Selectors
import { allMessages } from '../../selectors/messageSelectors'



const MessageList = () => {
    let messages = useSelector( state => allMessages(state) )
    let items = messages.map( (message, idx) => <li key={idx}>{message}</li>)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(wsConnect('test'))
    }, [])



    return <ul>
        <h1>Messages</h1>
        {items}
    </ul>
}

export default MessageList;