import React, { useState } from 'react';

import DevSites from '../../images/website_setup.inline.svg';
import DevApp from '../../images/order_confirmed.inline.svg';
import DevEmail from '../../images/message_sent.inline.svg';

import {
  Section, Cards, Card, Title, Panel, CardHeader,
} from './styles';

import { Container, Button } from '../../elements';

const ServiceSection = () => {
  const [isOpen, setIsOpen] = useState([true, false, false]);

  const open = (index) => {
    const arr = [false, false, false];
    arr[index] = !arr[index];
    setIsOpen([...arr]);
  };

  return (
    <Section>
      <Title>O que nos fazemos</Title>
      <Container>
        <Cards>
          <Card>
            <CardHeader onClick={() => open(0)}>
              <DevSites />
              <h3>Desenvolvimento de Sites</h3>
            </CardHeader>
            <Panel isOpen={isOpen[0]}>
              <p>
                Sites ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Button>Orçamento</Button>
            </Panel>
          </Card>
          <Card>
            <CardHeader onClick={() => open(1)}>
              <DevEmail />
              <h3>Email Marketing</h3>
            </CardHeader>
            <Panel isOpen={isOpen[1]}>
              <p>
                Email ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Button>Orçamento</Button>
            </Panel>
          </Card>
          <Card>
            <CardHeader onClick={() => open(2)}>
              <DevApp />
              <h3>Desenvolvimento de App</h3>
            </CardHeader>
            <Panel isOpen={isOpen[2]}>
              <p>
                App ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Button>Orçamento</Button>
            </Panel>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
};

export default ServiceSection;
