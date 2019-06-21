import styled from 'styled-components';

export const HeaderStyles = styled.div` 
  margin-bottom: 1.45rem;
`;

export const Logo = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    margin: 0;

    > span {
      font-weight: 400;
    }
`;
