import React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';

const PopularNews = ({ news }) => (
  <div>
    <h4>popular news</h4>
    <div>
      {news.map(article => (
        <ArticlePreview
          key={article.title}
          image={article.urlToImage}
          published={article.publishedAt}
          title={article.title}
        />
      ))}
    </div>
  </div>
);

PopularNews.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default PopularNews;
