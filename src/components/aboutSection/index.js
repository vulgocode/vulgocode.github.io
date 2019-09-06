/* eslint-disable max-len */
import React from 'react';
import Media from 'react-media';

import { Section, WrapperAbout, Title } from './styles';
import { Container } from '../../elements';

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
          A Vulgocode é uma Agência web completa, com o propósito de fornecer serviços voltados a internet.
          A ideia de ter cada projeto como único, através de briefings bem elaborados e o entendimento do negócio de nosso cliente. Uma agência focada na criação de sites e ferramentas de webmarketing que tornem o seu site rentável para o seu negócio e atraente para a internet e os seus potenciais clientes.
          <br />
          Além da criação de sites e da criação de blogs personalizados, o que nos torna uma agência Web completa é o nosso leque de Serviços voltados para o seu site, como Consultoria em Google Ads (Links patrocinados) e SEO - Otimização de sites.
        </p>
      </WrapperAbout>
    </Container>
  </Section>
);

export default AboutSection;
