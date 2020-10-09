import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import EyePoint from './eyePoint'

const StyledSVG = styled.svg`
  fill: ivory;
  stroke: black;
  outline: 1px solid purple;
`

const StyledEye = styled.circle`
  fill: white;
  stroke: black;
`

const eyeSVG = () => {
    let points = useSelector((state) => Object.values(state.points).filter(
        (point) => point.type === 'eye'));

    let pointItems = points.map((point, idx) => {
        return <EyePoint key={idx} point={point} />
    })

    return (
        <StyledSVG width="100" height="100" >
            <StyledEye cx="50" cy="50" r="50" />
            {pointItems}
        </StyledSVG>
    );
};


export default eyeSVG;

