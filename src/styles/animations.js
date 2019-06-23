import { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`;

const pulsar = keyframes`
  0%{
    transform: scale(0.8);
    opacity: 1;
  }
  75%{
    opacity: 1
  }
  100%{
    transform: scale(1)
    opacity: 0;
  }
`;

export const pulsarAnimation = (length, delay) => css`
  animation: ${pulsar} ${length} ${delay} linear infinite;
`;

const leftRight = keyframes`
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(10px)
  }
`;

export const leftRightAnimation = delay => css`
 animation: ${leftRight} 4s ${delay && delay} ease-in-out infinite alternate;
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`;
