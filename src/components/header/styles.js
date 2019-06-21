import styled from 'styled-components';

export const HeaderStyles = styled.header``;

export const Headline = styled.h2`
  font-size: 64px;
  text-transform: capitalize;
  width: 235px;
  text-align: left;

  @media (min-width: 900px){
    font-size: 82px;
    width: 330px;
  }
`;

export const Description = styled.h1`
  font-size: 18px;
  max-width: 330px;
  position: relative;

  @media (min-width: 900px){
    max-width: 350px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 5px;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
  }
`;
export const WrapHeaderline = styled.div`
  margin: 0 auto;

  @media (min-width: 600px){
    margin: 0 ;
  }
`;
