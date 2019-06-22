import React from 'react';
import Carousel from 'nuka-carousel';
import Media from 'react-media';

import {
  Section, Title, Img, WrapperSlider,
} from './styles';
import { Container } from '../../elements';

import agred from '../../images/agenciared.png';
import aroma from '../../images/aromagospel.png';
import asiamed from '../../images/asiamed.png';
import asiaservice from '../../images/asiaservice.png';


const ClientsSection = () => (
  <Section>
    <Container>
      <Title>Quem já confia em nos</Title>

      <Media query="(min-width: 600px)">
        {isNotMobile => (
          <Carousel
            autoplay
            autoplayReverse
            autoplayInterval={1000}
            wrapAround
            cellAlign="center"
            slidesToShow={!isNotMobile ? 2 : 3}
            initialSlideHeight={100}
            withoutControls
            framePadding="50px 0px 100px"
          >
            <WrapperSlider>
              <Img src={agred} />
            </WrapperSlider>

            <WrapperSlider>
              <Img src={aroma} />
            </WrapperSlider>

            <WrapperSlider>
              <Img src={asiamed} />
            </WrapperSlider>

            <WrapperSlider>
              <Img src={asiaservice} />
            </WrapperSlider>
          </Carousel>
        )}
      </Media>
    </Container>
  </Section>
);

export default ClientsSection;
