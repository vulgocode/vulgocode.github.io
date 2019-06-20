import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { HeaderStyles, Wrapper, Title } from './styles';

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Wrapper>
      <Title style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </Title>
    </Wrapper>
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
