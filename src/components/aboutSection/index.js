import React from 'react';
import Media from 'react-media';

import { Section, WrapperAbout, Title } from './styles';
import { Container, Button } from '../../elements';

import AboutSvg from '../../images/about.inline.svg';

const AboutSection = () => (
  <Section>
    <Container>
      <Media query="(min-width: 600px)">
        {isNotMobile => isNotMobile && <AboutSvg />}
      </Media>

      <WrapperAbout>
        <Title>
          Sobre a
          <span> Vulgo</span>
          code
        </Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <Button>Orçamento</Button>
      </WrapperAbout>
    </Container>
  </Section>
);

export default AboutSection;
