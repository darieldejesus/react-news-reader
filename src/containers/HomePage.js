import React, { Component } from 'react';
import styled from 'styled-components';

import { getPopularPosts } from '../utils/api';

import BasePage from './BasePage';
import PopularSlide from '../components/PopularSlide';
import PopularNews from '../components/PopularNews';

const SectionPreview = styled.section`
  height: 350px;
  padding: 30px 0;
  width: 100%;
`;

class HomePage extends Component {
  state = {
    popularNews: null,
    latestNews: null,
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
        <SectionPreview>
          {true && popularNews && <PopularSlide news={popularNews} />}
          {false && popularNews && <PopularNews news={popularNews} />}
        </SectionPreview>
      </BasePage>
    );
  }
}

export default HomePage;
