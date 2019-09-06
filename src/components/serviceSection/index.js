/* eslint-disable max-len */
import React from 'react';

import DevSites from '../../images/website_setup.inline.svg';
import DevApp from '../../images/order_confirmed.inline.svg';

import {
  Section, Cards, Card, Title, Panel, CardHeader,
} from './styles';

import { Container } from '../../elements';

const ServiceSection = () => (
  <Section>
    <Title>O que nos fazemos</Title>
    <Container>
      <Cards>
        <Card>
          <CardHeader>
            <DevSites />
            <h3>
                Desenvolvimento
              <br />
               Web
            </h3>
          </CardHeader>
          <Panel>
            <p>
                Ter um site não é uma exclusividade, entretanto ter um projeto exclusivo, pensado e desenvolvido dentro dos conceitos e necessidades da sua empresa, é um diferencial necessário para destacar-se no mercado.
              <br />
                É exatamente isso que oferecemos: projetos exclusivos desenvolvidos por profissionais capazes de entender seus problemas e colocar em prática as melhores soluções.
            </p>

          </Panel>
        </Card>
        <Card>
          <CardHeader>
            <DevApp />
            <h3>
                Desenvolvimento
              <br />
                Mobile
            </h3>
          </CardHeader>
          <Panel>
            <p>
                Foco em desenvolver e implantar soluções inovadoras de forma ágil, com personalizações de acordo com a necessidade de cada cliente.
              <br />
                Desenvolvemos aplicativos em multi plataformas (Android e iOS), de acordo com a necessidade da sua empresa. Aplicativos desenvolvidos para fácil integração com os sistemas ERP’s dos clientes. Garantimos suporte constante, uma vez que temos equipes de desenvolvimento e design sempre prontas para analisar e auxiliar a encontrar as melhores opções para o seu negócio.
            </p>
          </Panel>
        </Card>
      </Cards>
    </Container>
  </Section>
);

export default ServiceSection;
