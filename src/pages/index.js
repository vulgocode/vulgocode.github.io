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

const Headline = styled.p`
  font-family: monospace;
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

const Links = [
  {
    Link: 'https://instagr.am/vulgocode',
    icon: <Instagram />,
  },
  {
    Link: 'https://fb.me/vulgocode.github.io',
    icon: <Facebook />,
  },
  {
    Link: 'https://wa.me/5511977185120',
    icon: <Whatsapp />,
  },
  {
    Link: 'mailto:contato@vulgocode.com',
    icon: <Email />,
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Agencia Web" />
    <Main>
      <Logo />
      <Headline>Código feito para durar.</Headline>
      <Share>
        {Links.map(({ link, icon }, index) => (
          <a
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </Share>
    </Main>
  </Layout>
);

export default IndexPage;
