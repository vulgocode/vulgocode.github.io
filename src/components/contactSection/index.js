import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Section, Title } from './styles';
import { Container, Button } from '../../elements';

const ContactSection = () => (
  <Section>
    <Container>
      <Title>Precisa de um orçamento para seu projeto ?</Title>
      <OutboundLink href="mailto:contato@vulgocode.com" target="_blank" rel="noopener noreferrer">
        <Button email>contato@vulgocode.com</Button>
      </OutboundLink>
      <OutboundLink href="https://wa.me/5511977185120?text=Eu%20quero%20um%20orçamento" target="_blank" rel="noopener noreferrer">
        <Button wp>
            Whatsapp
        </Button>
      </OutboundLink>
    </Container>
  </Section>
);

export default ContactSection;
