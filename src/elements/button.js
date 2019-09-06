import styled from 'styled-components';

export const Button = styled.button`
  height: 48px;
  display: inline-block;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  background: ${({ theme, email }) => (email ? '#3b5998' : theme.colors.secundary)};
  margin: 10px;
    
  border-radius: 36px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
 
  color: ${({ theme }) => theme.colors.white};

  transform: translateY(0);
  transition: transform 400ms ease, box-shadow 400ms ease;

  user-select: none;
  cursor: pointer;

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
