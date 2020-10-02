import React, {Fragment} from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../../util/canvasUtil'
import EyePoint from './eyePoint'

const StyledCanvas = styled.canvas`
  background-color: ivory;
`
const StyledPlane = styled.div`
  position: relative;
`

const Eye = () => {
  let ref = useRef();
  let points = useSelector((state) => 
    Object.values(state.points)
    .filter( (point) => point.type === 'eye' ));

  useEffect(() => {
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
    
    //background

    // square
    // context.strokeRect(0, 0, canvas.width, canvas.height);

    // circle
    context.arc(canvas.width / 2, canvas.height / 2, 
      47, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.stroke();

    // context.fill();
  }, []);

  let { x, y } = points[points.length - 1];

  let pointItems = points.map( (point, idx) => 
    <EyePoint key={idx} point={point} />
  )

  return (
    <div>
      <StyledPlane>
        <StyledCanvas ref={ref} style={{ width: "100px", height: "100px" }} />
        <Fragment>
          {pointItems}
        </Fragment>
      </StyledPlane>
    </div>
  );
};

export default Eye;

