import React from 'react';
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import EyePointSVG from './eyePointSVG'

const blip = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const StyledSVG = styled.svg`
  fill: ivory;
  stroke: black;
  outline: 1px solid purple;
`

const StyledEye = styled.circle`
  fill: white;
  stroke: black;
`

const StyledPoint = styled.circle`
  fill: chartreuse;
  stroke: black;
  strike-width: 2;
  opacity: 0;
  animation: ${blip} 1.2s 4;
`

const eyeSVG = () => {
    let points = useSelector((state) => Object.values(state.points).filter(
        (point) => point.type === 'eye'));

    let pointItems = points.map((point, idx) => {
        //  <BlipPoint key={idx} point={point} />
        return <EyePointSVG point={point} />
    })

    return (
        <StyledSVG width="100" height="100" >
            <StyledEye cx="50" cy="50" r="50" />
            {pointItems}
        </StyledSVG>
    );
};


export default eyeSVG;

