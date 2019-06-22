import React from 'react';
import PropTypes from 'prop-types';

import { HeaderStyles, Logo } from './styles';
import { Button, Container } from '../../elements';

const Navbar = ({ toggleModal }) => (
  <HeaderStyles>
    <Container>
      <Logo>
        Vulgo
        <span>code</span>
      </Logo>
      <Button onClick={toggleModal}>orçamento</Button>
    </Container>
  </HeaderStyles>
);

Navbar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Navbar;
