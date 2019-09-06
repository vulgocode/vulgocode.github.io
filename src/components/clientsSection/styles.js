import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
`;

export const Title = styled.h2`
 margin-top: 25px;
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
  filter: invert(90%) opacity(.8); 
`;
