import React from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../../util/canvasUtil'
import * as animUtil from '../../animations'

const StyledPoint = styled.circle`
    animation: ${(props) => animUtil.animationSelector(props)} 1.2s 4; 
    opacity: 0;
    fill: black;
`

const EyePoint = ({point}) => {
    return (<StyledPoint
      cx={point.x}
      cy={point.y}
      r="20"
      animation={point.animation}/>)
}

export default EyePoint;