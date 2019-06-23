import styled from 'styled-components';

import { Container, Button } from '../../elements';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.bgLight};

   > ${Container}{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  } 

  &::before {
    content:'';
    width: 100vw;
    height: 10vw;
    display: block;  
    overflow: hidden;
  }

  &::before {
    border-radius: 0% 0% 5% 100%;
    background: ${({ theme }) => theme.colors.white};
  } 
`;

export const WrapperAbout = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: 20px;

  > ${Button}{
    display: block;
    margin-left: auto;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-weight: 400;
  width: max-content;
  margin: 30px auto 50px;

  @media (min-width: 600px) {
    margin: 30px auto 50px 0;
  }
  

  > span {
    font-weight: 700;
  }

  > p {
    margin-top: 20px;
  }

  &::after{
    content: '';    
    display: block;
    height: 5px;
    width: 50%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 10px 0 0 0; 
    right: 0;
  }
`;
