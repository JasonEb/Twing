import React, {Fragment} from 'react';
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPixelRatio } from '../util/canvasUtil'
import Point from './point'

const blipping = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledCanvas = styled.canvas`
  background-color: ivory;
`
const StyledPlane = styled.div`
  position: relative;
`

const Canvas = () => {
  let ref = useRef();
  let points = useSelector((state) => Object.values(state.points));

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
    context.strokeRect(0, 0, canvas.width, canvas.height);
    context.fill();
  }, []);

  let { x, y } = points[points.length - 1];

  let pointItems = points.map( (point, idx)=> <Point key={idx} point={point} />)

  return (
    <div>
      <p>
        Point: {x}, {y}
      </p>
      <StyledPlane>
        <StyledCanvas ref={ref} style={{ width: "100px", height: "100px" }} />
        <Fragment>
          {pointItems}
        </Fragment>
      </StyledPlane>
    </div>
  );
};

export default Canvas;

