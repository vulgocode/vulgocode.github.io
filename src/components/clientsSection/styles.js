import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  &::after,
  &::before {
    content:'';
    width: 100vw;
    height: 10vw;
    display: block;  
    overflow: hidden;
  }

  &::before {
    border-radius: 0% 0% 100% 5%;
    background: ${({ theme }) => theme.colors.bgLight};
  } 

  &::after {
    border-radius: 100% 5% 0% 0%;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const Title = styled.h2`
 margin-top: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;

export const WrapperSlider = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 70px;
`;


export const Img = styled.img`
height: 70px;
 
`;
