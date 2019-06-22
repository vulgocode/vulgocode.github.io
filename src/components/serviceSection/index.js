/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DevSites from '../../images/website_setup.inline.svg';
import DevApp from '../../images/order_confirmed.inline.svg';
import VisualData from '../../images/visual_data.inline.svg';

import {
  Section, Cards, Card, Title, Panel, CardHeader,
} from './styles';

import { Container, Button } from '../../elements';

const ServiceSection = ({ toggleModal }) => {
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
              <h3>
                Desenvolvimento
                <br />
                de Sites
              </h3>
            </CardHeader>
            <Panel isOpen={isOpen[0]}>
              <p>
                Ter um site não é uma exclusividade, entretanto ter um projeto exclusivo, pensado e desenvolvido dentro dos conceitos e necessidades da sua empresa, é um diferencial necessário para destacar-se no mercado.
                <br />
                É exatamente isso que oferecemos: projetos exclusivos desenvolvidos por profissionais capazes de entender seus problemas e colocar em prática as melhores soluções.
              </p>
              <Button onClick={toggleModal}>Orçamento</Button>
            </Panel>
          </Card>
          <Card>
            <CardHeader onClick={() => open(1)}>
              <VisualData style={{ width: '160px', height: '110px' }} />
              <h3>Landing Page</h3>
            </CardHeader>
            <Panel isOpen={isOpen[1]}>
              <p>
                Nós desenvolvemos landing pages para os mais diferentes ramos de atividade, e o ponto em comum em todas as empresas que aderiram a utilização das landing pages foi o aumento na captação de leads e na conversão em venda real, aumentando a receita e visibilidade das campanhas.
                <br />
                Veja se seu site com cerca de 2000 visitas mensais consegue 100 pedidos de compra, ele tem 5% de taxa de conversão. Aumentando em apenas mais 1%, o número de pedidos de compra chegará a 120. Isso representará um acréscimo de 20% na receita da sua empresa, apenas aumentando a conversão em um ponto percentual. As landing pages têm exatamente esse objetivo, aproveitar o trafego gerado para converter o maior número de visitantes em vendas concretizadas, a curto e médio prazo
              </p>
              <Button onClick={toggleModal}>Orçamento</Button>
            </Panel>
          </Card>
          <Card>
            <CardHeader onClick={() => open(2)}>
              <DevApp />
              <h3>
                Desenvolvimento
                <br />
                de App
              </h3>
            </CardHeader>
            <Panel isOpen={isOpen[2]}>
              <p>
                Foco em desenvolver e implantar soluções inovadoras de forma ágil, com personalizações de acordo com a necessidade de cada cliente.
                <br />
                Desenvolvemos aplicativos em multi plataformas (Android e iOS), de acordo com a necessidade da sua empresa. Aplicativos desenvolvidos para fácil integração com os sistemas ERP’s dos clientes. Garantimos suporte constante, uma vez que temos equipes de desenvolvimento e design sempre prontas para analisar e auxiliar a encontrar as melhores opções para o seu negócio.
              </p>
              <Button onClick={toggleModal}>Orçamento</Button>
            </Panel>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
};

ServiceSection.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ServiceSection;
