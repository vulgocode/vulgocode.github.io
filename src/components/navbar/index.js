import React from 'react';

import { HeaderStyles, Logo } from './styles';
import { Button, Container } from '../../elements';

const Navbar = () => (
  <HeaderStyles>
    <Container>
      <Logo>
        Vulgo
        <span>code</span>
      </Logo>
      <Button>orçamento</Button>
    </Container>
  </HeaderStyles>
);

export default Navbar;
