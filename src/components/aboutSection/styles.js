import styled from 'styled-components';

import { Container, Button } from '../../elements';

export const Section = styled.section`
padding: 50px 0 0 0;

   > ${Container}{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
