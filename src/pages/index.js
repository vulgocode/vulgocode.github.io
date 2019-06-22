import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Header,
  Layout,
  SEO,
  Navbar,
  ServiceSection,
  AboutSection,
  ClientsSection,
} from '../components';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <Header />
      <ServiceSection />
      <AboutSection />
      <ClientsSection />
    </Layout>
  );
};

export default IndexPage;
