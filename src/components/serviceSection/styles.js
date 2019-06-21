import styled, { css } from 'styled-components';

import { Button } from '../../elements';
import { pulsarAnimation } from '../../styles/animations';

export const Section = styled.section`
  padding: 50px 0 0 0;
`;

export const Title = styled.h2`
  text-align: center;
  position: relative;
  width: max-content;
  margin: 0 auto;

  &::after{
    content: '';
    display: block;
    height: 5px;
    width: 50%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 10px 0 0 0; 
  }
`;

export const Cards = styled.ul`
 
  width: 100%;
  list-style: none;
  margin: 0;
  position: relative;

   @media (min-width: 600px){
    display: flex;
    justify-content: space-between;
  } 
`;

export const Card = styled.li`
  /* @media (min-width: 600px){
    display: flex;
  } */
  
`;

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.bg}; 
  width: 200px;
  height: 200px;  
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px auto;
  position: relative;  

  &:hover ::before{
    content: '';
    position: absolute;
    display: block;
    width: 230px;
    height: 230px;
   /*  border: 0px solid #66339955; */
    box-shadow: inset 0 0 20px 0 #66339988, 0 0 10px 0 #66339944;
    
    z-index: -1;
    border-radius: 20px;
   
    ${pulsarAnimation('1s', '0s')};
  }


  cursor: pointer;

  > h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 10px;
    user-select: none;
  }
`;


export const Panel = styled.div`
  background-color: ${({ theme }) => theme.colors.bg}; 
  border-radius: 10px;
  position: relative;
 
   
  max-height: 0;
  overflow: hidden;
  transition: all 400ms linear;
 
  padding: 0 20px;
  
 ${({ isOpen }) => (isOpen && css`
 transition: all 400ms linear;
  max-height: 300px;
  padding: 20px;  
 `)};

@media (min-width: 600px) {
  max-height: max-content;
  padding: 20px;
  position: absolute;
  left: 0; 
  display:  ${({ isOpen }) => (isOpen ? 'block' : 'none')};

 
}

  & > ${Button}{
    display: block;
    margin: 0 0 0 auto;

  }
`;
