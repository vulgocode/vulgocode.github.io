import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.svg``;

const icons = {
  bgHero: {
    shape: (
      <path d="M931.994 -110.045L490.903 -109.249C439.458 -109.249 509.004 -109.249 455.654 -109.249C396.112 -99.2955 388.531 -25.6388 292.052 90.6188C195.573 206.876 -132.149 222.404 60.1239 438.786C252.397 655.168 552.351 446.161 672.389 421.476C792.426 396.791 868.165 399.179 983.915 421.476L983.915 -109.249C968.698 -109.249 947.265 -110.045 931.994 -110.045Z" fill="#663399" />
    ),
    viewBox: '0 0 293 536',
    width: '293',
    height: '536',
  },
};

const SVG = ({ icon }) => (
  <Wrapper
    viewBox={icons[icon].viewbox}
    width={icons[icon].width}
    height={icons[icon].height}
  >
    {icons[icon].shape}
  </Wrapper>
);

SVG.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default SVG;
