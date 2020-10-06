import React from 'react';
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from 'react-redux'

const blip = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const StyledSVG = styled.svg`
  fill: darkgreen;
  stroke: black;
`

const StyledPoint = styled.circle`
  fill: chartreuse;
  stroke: black;
  strike-width: 2;
  opacity: 0;
  animation: ${blip} 1.2s 4;
`

const RadarSVG = () => {
    let points = useSelector((state) => Object.values(state.points).filter(
        (point) => point.type === 'blip'));

    let { x, y } = points[points.length - 1];

    let pointItems = points.map((point, idx) => {
    //  <BlipPoint key={idx} point={point} />
        let { x, y } = point
        return <StyledPoint cx={x} cy={y} r="15" />
    })

    return (
        <StyledSVG width="200" height="150" >
            <rect width="200" height="150" />
            {pointItems}
        </StyledSVG>
    );
};


export default RadarSVG;

