import React from 'react';
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { blip } from '../../animations'

const StyledSVG = styled.svg`
  fill: darkgreen;
  stroke: black;
`

const StyledPoint = styled.circle`
  fill: chartreuse;
  stroke: black;
  strike-width: 2;
  opacity: 0;
  animation: ${blip} 1.2s 8;
`

const Radar = () => {
    let points = useSelector((state) => Object.values(state.points).filter(
        (point) => point.type === 'blip'));

    let { x, y } = points[points.length - 1];

    let pointItems = points.map((point, idx) => {
        let { x, y } = point
        return <StyledPoint key={idx} cx={x} cy={y} r="15">
            <animate attributeName="r" from="10px" to="25px"
              begin="0s" dur="10s" />
        </StyledPoint>
    })

    return (
        <StyledSVG width="200" height="150" >
            <rect width="200" height="150" />
            {pointItems}
        </StyledSVG>
    );
};


export default Radar;

