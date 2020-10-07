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

const StyledPoint = styled.circle`
    animation: ${(props) => animationSelector(props)} 1.2s 4; 
    opacity: 0;
    fill: black;
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

const EyePointSVG = ({point}) => {
    return (<StyledPoint
      cx={point.x}
      cy={point.y}
      r="20"
      animation={point.animation}/>)
}

export default EyePointSVG;