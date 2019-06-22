import React from 'react';

import { Section, Title, Call } from './styles';
import { Container, Button } from '../../elements';

const ContactSection = () => (
  <Section>
    <Container>
      <Title>Precisa de ajuda com algum Projeto</Title>
      <Call>Nos dê um Hello!</Call>
      <Button ghost>Entre em contato</Button>
    </Container>
  </Section>
);

export default ContactSection;
