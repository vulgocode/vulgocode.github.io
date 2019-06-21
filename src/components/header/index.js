import React from 'react';
import Media from 'react-media';

import { Container } from '../../elements';
import {
  HeaderStyles, Headline, Description, WrapHeaderline,
} from './styles';

import HeroSvg from '../../images/hero.inline.svg';

const Header = () => (
  <HeaderStyles>
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

export default Header;
