import { keyframes } from "styled-components";

export const spin = keyframes`
0% {
  transform: rotate(0deg)
  }
    25% {
      transform: rotate(5deg)
    }
    50% {
      transform: rotate(10deg)
    }
    75%{
      transform: rotate(5deg)
    }
  100% {
 
  transform: rotate(0deg)
  }
`;
export const anotherSpin = keyframes`
0% {
  transform: rotate(0deg)
  }
    25% {
      transform: rotate(-5deg)
    }
    50% {
      transform: rotate(-10deg)
    }
    75%{
      transform: rotate(-5deg)
    }
  100% {
 
  transform: rotate(0deg)
  }
`;

export const slideDown = keyframes`
  0% {
  transform: translateY(0%)
  }
   25% {
  transform: translateY(10%)
    }
    50% {
  transform: translateY(0%)
      }
    75%{
  transform: translateY(-10%)
    }
  100% {
  transform: translateY(0%)
  }
`;

export const fade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const heartFallSpin = keyframes`
  0% {
    transform: translateY(-100vh) rotate(360deg);
  }
  100% {
    transform: translate(0px) rotate(-25deg);
  }
`;

export const heartFallSpinSecond = keyframes`
  0% {
    transform: translateY(-100vh) rotate(360deg);
  }
  100% {
    transform: translateY(0px) rotate(25deg);
  }
`;

export const cartMovement = keyframes`
  0% {
  transform: translateX(300px);
    border: 1px solid transparent;
  }
  100% {
    transform: translateX(0px);
    border: 1px solid transparent;
  }
`;

export const menuFadeIn = keyframes`
  from {
  transform: translateX(-100%);
  opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;
