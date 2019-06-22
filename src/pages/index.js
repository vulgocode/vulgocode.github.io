import React, { useState } from 'react';
import Modal from 'react-modal';


import {
  Header,
  Layout,
  SEO,
  ServiceSection,
  AboutSection,
  ClientsSection,
  ContactSection,
  Footer,
} from '../components';
import { Button } from '../elements';

Modal.setAppElement('#___gatsby');

const style = {
  overlay: {
    backgroundColor: '#663399ee',
  },
  content: {
    color: 'black',
    width: '300px',
    height: '250px',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Header toggleModal={toggleModal} />
      <ServiceSection toggleModal={toggleModal} />
      <AboutSection toggleModal={toggleModal} />
      <ClientsSection />
      <ContactSection toggleModal={toggleModal} />
      <Footer />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={style}
      >
        <h3 style={{ fontWeight: '400' }}>
          Envie um email ou chama no Whatsapp para receber um orçamento
          <strong> gratuito</strong>
        </h3>
        <a href="mailto:alexandresantos84@gmail" target="_blank" rel="noopener noreferrer">
          <Button email>Email</Button>
        </a>
        <a href="https://wa.me/5511977185120?text=Eu%20quero%20um%20orçamento" target="_blank" rel="noopener noreferrer">
          <Button wp>
            Whatsapp
          </Button>
        </a>
      </Modal>
    </Layout>
  );
};


export default IndexPage;
