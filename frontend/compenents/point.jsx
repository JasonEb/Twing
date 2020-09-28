import React from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../util/canvasUtil'

const StyledCanvas = styled.canvas`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
`

const Point = ({point}) => {
    let ref = useRef();

    useEffect(() => {
        let { x, y } = point;
        let canvas = ref.current;
        let context = canvas.getContext("2d");
        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue("height")
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.beginPath();

        //point
        context.arc(x, y,
            5,
            0,
            2 * Math.PI
        );

        context.fill();
    }, [])

    return (<StyledCanvas ref={ref}>Point</StyledCanvas>)
}

export default Point;