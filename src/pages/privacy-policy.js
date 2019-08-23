/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

import {
  Layout,
  SEO,
  Footer,
} from '../components';

const Main = styled.main`
  min-height: 100%;
  padding: 70px 20px;

  @media (min-width: 600px){
    padding: 100px 50px;

  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Main>
      <h3>Privacy policy:</h3>
      <p>This Privacy Policy defines how Vulgocode team collect and use users personal and non-personal information and data in our mobile applications (available for smart phones and tablets) and on our website.</p>

      <h3>Personal Data:</h3>
      <p>Vulgocode respects your privacy rights and recognizes the importance of protecting any information collected about you.</p>

      <p>Vulgocode do not collect any personal user data. Vulgocode may use tools or third-party analytics software to collect and use certain non-personal data that does not enable us to identify you (we track only data such as: device type, mobile device software, data carrier, ...).</p>

      <p>Vulgocode uses Google Analytics to analyze anonymous aggregated usage data for our applications.</p>

      <h3>Non-Personal Data:</h3>
      <p>Advertisers who serve ads may use technology which can uniquely identify mobile devices to deliver better target messages and control number of times you get an Add. Add Networks may access your unique device identifier through their own technologies and use it to target advertising to you.</p>

      <p> Advertisers make available links through advertisements or otherwise enabling you to access third party sites, tools or games. Please note that, while using such sites, tools or games, you are not affiliated with or controlled by us.</p>

      <p>Vulgocode applications use Google AdMob ads as primary ad service with included collaboration (ad mediation) with AppBrain and InMobi ad networks.</p>
    </Main>
    <Footer />
  </Layout>
);


export default IndexPage;
