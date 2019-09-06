import styled from 'styled-components';

import { Container } from '../../elements';

import bgHero from '../../images/bg-hero.svg';

export const HeaderStyles = styled.header`
  padding: 0 0 50px;
  background: #663399;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {  
    background: url(${bgHero}) calc(100% + 245px) top / 690px 550px no-repeat;
    color: inherit;
    padding: 0;
  }

  @media (min-width: 900px) {  
    background: url(${bgHero}) calc(100% + 145px) top / 690px 550px no-repeat;
  }

  @media (min-width: 1200px) {  
    background: url(${bgHero}) calc(100% + 45px) top / 690px 550px no-repeat;
  }

  @media (min-width: 1920px) {  
    background: none;
  }

    > ${Container}{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
`;

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
  word-spacing: 5px;
  letter-spacing: 0.09em;

  @media (min-width: 900px){
    max-width: 350px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 5px;
    display: block;
    background-color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 10px;

    @media (min-width: 600px) {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const WrapHeaderline = styled.div`
  margin: 0 auto;

  @media (min-width: 600px){
    margin: 0 ;
  }
`;
