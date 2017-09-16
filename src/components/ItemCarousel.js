import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Slide = styled.div`
  opacity: 0;
  transition: opacity 1s;
  position: absolute;

  ${props => props.active && css`
    opacity: 1;
  `}
`;

const Image = styled.img`
  width: 100%;
`;

const Details = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  box-sizing: border-box;
  padding: 1rem;
  position: absolute;
  text-align: left;
  width: 100%;
  z-index: 10;
`;

const Title = styled.p`
  color: #fff;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #fff;
  font-size: 0.7rem;
`;

const ItemCarousel = ({ title, description, image, active }) => (
  <Slide active={active}>
    <Image src={image} alt={title} />
    <Details>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Details>
  </Slide>
);

ItemCarousel.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

ItemCarousel.defaultProps = {
  title: '',
  description: '',
};

export default ItemCarousel;
