import React, { useState, useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import MessageList from './messages/message_list'
import Canvas from './canvas'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Root = ({ store }) => {
    const [channel, setChannel] = useState("Testing Channel")

    useEffect(() => {
        setChannel("InterpretiveDashDance")
    }, []);

    return (
    <Provider store={store}>
        <StyledDiv>
            <h1>{channel}</h1>
            <Canvas />
            <MessageList />
        </StyledDiv>
    </Provider>
    )
}

export default Root;