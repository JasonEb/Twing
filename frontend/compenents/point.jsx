import React from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../util/canvasUtil'

const blip = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
const look_left = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  50% {
    transform: translateX(-25px);
    opacity:0.90;
  }

  100% {
    transform: translateX(0px);
    opacity:1;
  }
`

const StyledPoint = styled.canvas`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${(props) => animationSelector(props)} 1.2s 10; 
    opacity: 0;
`

const animationSelector = (props) => { 
  switch (props.animation) {
    case 'blip':
      return blip
      break
    case 'look_left':
      return look_left
      break
    default:
      return blip
  }
}

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

    return (<StyledPoint ref={ref} animation={point.type}>Point</StyledPoint>)
}

export default Point;