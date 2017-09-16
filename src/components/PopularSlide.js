import React from 'react';
import PropTypes from 'prop-types';

import Carousel from './Carousel';

const parseForSlides = entries => (
  entries.map((entry) => {
    const { title, description, urlToImage, url } = entry;
    return {
      title,
      description,
      image: urlToImage,
      urlTo: url,
    };
  })
);

const PopularSlide = ({ news }) => (
  <div style={{
    display: 'block',
    width: '500px',
    position: 'relative',
    height: 'inherit',
  }}
  >
    <Carousel slides={parseForSlides(news)} />
  </div>
);

PopularSlide.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlTo: PropTypes.string.isRequired,
  })).isRequired,
};

export default PopularSlide;
