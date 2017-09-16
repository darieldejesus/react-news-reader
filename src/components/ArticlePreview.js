import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImagePreview = styled.img`
  width: 150px;
`;

const ArticlePreview = ({ image, published, title }) => (
  <div>
    <ImagePreview src={image} alt={title} />
    <p key="published_date">{published}</p>
    <p key="title">{title}</p>
  </div>
);

ArticlePreview.propTypes = {
  image: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticlePreview;
