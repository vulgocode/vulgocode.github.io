import React from 'react';

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


const IndexPage = () => (
  <Layout>
    <SEO title="Agencia Web" />
    <Header />
    <AboutSection />
    <ServiceSection />
    <ClientsSection />
    <ContactSection />
    <Footer />
  </Layout>
);

export default IndexPage;
