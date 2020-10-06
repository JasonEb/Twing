import React, { Fragment } from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../../util/canvasUtil'
import BlipPoint from './blipPoint'

const StyledSVG = styled.svg`
  fill: ivory;
  stroke: black;
`
const RadarSVG = () => {
    let points = useSelector((state) => Object.values(state.points).filter(
        (point) => point.type === 'blip'));

    useEffect(() => {
    }, []);

    let { x, y } = points[points.length - 1];

    let pointItems = points.map((point, idx) => <BlipPoint key={idx} point={point} />)

    return (
        <StyledSVG width="200" height="150" >
            <rect width="200" height="150" />
        </StyledSVG>
    );
};

export default RadarSVG;

