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
    <SEO title="Home" />
    <Header />
    <ServiceSection />
    <AboutSection />
    <ClientsSection />
    <ContactSection />
    <Footer />
  </Layout>
);


export default IndexPage;
