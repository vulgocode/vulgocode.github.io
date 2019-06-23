import React from 'react';
import PropTypes from 'prop-types';

import { Section, Title, Call } from './styles';
import { Container, Button } from '../../elements';

const ContactSection = ({ toggleModal }) => (
  <Section>
    <Container>
      <Title>Precisa de um orçamento para seu projeto</Title>
      <Call>Click no Botão!</Call>
      <Button ghost onClick={toggleModal}>Entre em contato</Button>
    </Container>
  </Section>
);

ContactSection.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ContactSection;
