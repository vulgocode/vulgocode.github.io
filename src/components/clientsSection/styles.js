import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primary};

  &::after,
  &::before {
    content:'';
    width: 100%;
    height: 70px;
    background: #fff;
    display: block;  
    overflow: hidden;
  }

  &::before {
    border-radius: 0% 0% 100% 5%;
  } 

  &::after {
    border-radius: 100% 5% 0% 0%;
  }
`;

export const Title = styled.h2`
margin-top: 40px;
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
