import React from 'react';
import styled from 'styled-components';

import { Layout, SEO } from '../components';
import Logo from '../images/logo.svg';
import Facebook from '../images/facebook.svg';
import Whatsapp from '../images/whatsapp.svg';
import Email from '../images/email.svg';
import Instagram from '../images/instagram.svg';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Share = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 170px;
  display: flex;
  justify-content: space-between;

  & > a {
    opacity: 0.6;
    transform: scale(1);
    transition: transform 300ms ease, opacity 200ms ease;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Agencia Web" />
    <Main>
      <Logo />
      <Share>
        <a
          href="https://instagr.am/vulgocode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://fb.me/vulgocode.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://wa.me/5511977185120"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp />
        </a>
        <a
          href="mailto:contato@vulgocode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
      </Share>
    </Main>
  </Layout>
);

export default IndexPage;
