import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0;
`;

export const Title = styled.h2`
  text-align: center;
  position: relative;
  width: max-content;
  margin: 0 auto 50px;
`;

export const Cards = styled.ul` 
  width: 100%;
  list-style: none;
  margin: 0;
  position: relative;
`;

export const Card = styled.li`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 25px;

  @media (min-width: 600px) {
  display: flex;  
  } 
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  > h3 {
    text-align: center;
    margin-top: 10px;
    user-select: none;
  }

  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;

export const Panel = styled.div` 
  @media (min-width: 600px) {
  padding: 0 0 0 20px;  
  } 
`;
