import React from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../../util/canvasUtil'

const look_left = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  50% {
    transform: translateX(-20px);
    opacity:0.90;
  }

  100% {
    transform: translateX(0px);
    opacity:1;
  }
`

const look_right = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  50% {
    transform: translateX(20px);
    opacity:0.90;
  }

  100% {
    transform: translateX(0px);
    opacity:1;
  }
`

const look_up = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  50% {
    transform: translateY(-20px);
    opacity:0.90;
  }

  100% {
    transform: translateY(0px);
    opacity:1;
  }
`

const look_down = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  50% {
    transform: translateY(20px);
    opacity:0.90;
  }

  100% {
    transform: translateY(0px);
    opacity:1;
  }
`

const StyledPoint = styled.canvas`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${(props) => animationSelector(props)} 1.2s 4; 
    opacity: 0;
`

const animationSelector = (props) => {
  switch (props.animation) {
    case "look_left":
      return look_left;
    case "look_right":
      return look_right;
    case "look_down":
      return look_down;
    case "look_up":
      return look_up;
    default:
      return blip;
  }
};

const EyePoint = ({point}) => {
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
            20,
            0,
            2 * Math.PI
        );

        context.fill();
    }, [])

    return (<StyledPoint ref={ref} animation={point.animation}>Point</StyledPoint>)
}

export default EyePoint;