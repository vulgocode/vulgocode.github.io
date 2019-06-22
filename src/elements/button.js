import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0;
  height: ${({ ghost }) => (ghost ? '67px' : '44px')};
  width: ${({ ghost }) => (ghost ? '220px' : '182px')};
  display: inline-block;
 


  border: ${({ ghost, theme }) => (ghost ? `2px solid ${theme.colors.primary}` : 'none')};
  background: ${({ ghost, theme, email }) => (
    // eslint-disable-next-line no-mixed-operators
    ghost && 'transparent' || email && '#3b5998' || theme.colors.secundary)};
  border-radius: 36px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  ${({ email }) => email && css`margin: 10px;`}


  text-transform: inherit;
  color: ${({ theme, ghost }) => (ghost ? theme.colors.primary : theme.colors.white)};

  transform: translateY(0);
  transition: transform 400ms ease, box-shadow 400ms ease;

  user-select: none;

    &:focus {
    outline: none;
  }

    &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

    &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;
