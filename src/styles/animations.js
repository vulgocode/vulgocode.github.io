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
