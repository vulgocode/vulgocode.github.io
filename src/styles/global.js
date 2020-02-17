import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};  
    font-size: 16px;
    font-family: sans-serif;
    user-select: none;
  }
  h3 {
    font-size: 30px;
  }
  a{
    color: ${({ theme }) => theme.colors.white};  
  }
`;
