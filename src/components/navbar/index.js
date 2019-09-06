import React from 'react';
import PropTypes from 'prop-types';

import { HeaderStyles, Logo } from './styles';
import { Container } from '../../elements';

const Navbar = ({ primary = false }) => (
  <HeaderStyles>
    <Container>
      <Logo primary={primary}>
        Vulgo
        <span>code</span>
      </Logo>
    </Container>
  </HeaderStyles>
);

Navbar.propTypes = {
  primary: PropTypes.bool,
};

Navbar.defaultProps = {
  primary: false,
};

export default Navbar;
