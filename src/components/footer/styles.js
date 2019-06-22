import styled from 'styled-components';

export const FooterStyles = styled.footer`
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.white};
`;
