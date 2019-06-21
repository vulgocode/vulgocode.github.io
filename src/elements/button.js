import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  height: 36px;
  width: 152px;
  display: inline-block;

  border: none;
  background: ${({ theme }) => theme.colors.secundary};
  border-radius: 36px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};

  transform: translateY(0);
  transition: transform 400ms ease, box-shadow 400ms ease;

  user-select: none;
 
  &:focus{
    outline: none;
  }

  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;
