import { keyframes } from "styled-components";

export const blip = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
export const look_left = keyframes`
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

export const look_right = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  50% {
    transform: translateX(25px);
    opacity:0.90;
  }

  100% {
    transform: translateX(0px);
    opacity:1;
  }
`

export const look_up = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  50% {
    transform: translateY(-25px);
    opacity:0.90;
  }

  100% {
    transform: translateY(0px);
    opacity:1;
  }
`

export const look_down = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  50% {
    transform: translateY(25px);
    opacity:0.90;
  }

  100% {
    transform: translateY(0px);
    opacity:1;
  }
`

export const animationSelector = (props) => {
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