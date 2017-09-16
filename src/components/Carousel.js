import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ItemCarousel from './ItemCarousel';

const Container = styled.div`
  position: relative;
`;

class Carousel extends Component {
  state = {
    currentIndex: 0,
  }

  componentDidMount() {
    const { delay } = this.props;
    const lastestIndex = this.props.slides.length - 1;
    let { currentIndex } = this.state;
    this.interval = window.setInterval(() => {
      currentIndex = (currentIndex === lastestIndex)
        ? 0
        : currentIndex += 1;
      this.setState({ currentIndex });
    }, delay);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    // const { prev } = this.state.currentIndex > 0;
    return (
      <Container>
        {slides.map((slide, index) => (
          <ItemCarousel
            key={slide.title}
            active={index === currentIndex}
            {...slide}
          />
        ))}
      </Container>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    urlTo: PropTypes.string,
  })).isRequired,
  delay: PropTypes.number,
};

Carousel.defaultProps = {
  delay: 4000,
};

export default Carousel;
