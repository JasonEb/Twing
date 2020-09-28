import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

// Actions
import { receiveMessage } from '../../actions/message_actions'
import { wsConnect } from '../../actions/websocket_actions'

// Selectors
import { allMessages } from '../../selectors/messageSelectors'

const StyledUl = styled.ul`
    align-self: flex-start;
`

const MessageList = () => {
    let messages = useSelector( state => allMessages(state) )

    let items = messages.map( (message, idx) => {
        return <li key={idx}>{message}</li>
    })
    
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(wsConnect('test'))
    }, [])

    return <StyledUl>
        <h1>Messages</h1>
        {items}
    </StyledUl>
}

export default MessageList;