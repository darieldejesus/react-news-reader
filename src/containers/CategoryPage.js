import React, { Component } from 'react';

import { getPopularPosts } from '../utils/api';

import BasePage from './BasePage';
import PopularNews from '../components/PopularNews';

class CategoryPage extends Component {
  state = {
    popularNews: null,
  }

  componentDidMount = () => {
    getPopularPosts()
      .then((articles) => {
        this.setState({
          popularNews: articles,
        });
      });
  }

  render = () => {
    const { popularNews } = this.state;
    return (
      <BasePage>
        {popularNews && <PopularNews news={popularNews} />}
      </BasePage>
    );
  }
}

export default CategoryPage;
