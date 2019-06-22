import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';

import { Container } from '../../elements';
import {
  HeaderStyles, Headline, Description, WrapHeaderline,
} from './styles';
import Navbar from '../navbar';

import HeroSvg from '../../images/hero.inline.svg';

const Header = ({ toggleModal }) => (
  <HeaderStyles>
    <Navbar toggleModal={toggleModal} />
    <Container>
      <WrapHeaderline>
        <Headline>sua agência web</Headline>
        <Description>
          Desenvolvimento de Websites, Landing Pages, Emails Marketing e muito mais!
        </Description>
      </WrapHeaderline>

      <Media query="(min-width: 600px)">
        {isNotMobile => isNotMobile && <HeroSvg style={{ minWith: '250px' }} />}
      </Media>
    </Container>
  </HeaderStyles>
);

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Header;
