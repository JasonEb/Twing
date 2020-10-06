import React, { useState, useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import MessageList from './messages/message_list'
import Eye from './eye/eye'
import Radar from './radar/radar'
import RadarSVG from './radar/radarSvg'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const EyesWrapper = styled.div`
    display: flex;
    outline: 1px solid red;
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
            <EyesWrapper>
                <Eye />
            </EyesWrapper>
            <Radar />
            <RadarSVG />
            <MessageList />
        </StyledDiv>
    </Provider>
    )
}

export default Root;