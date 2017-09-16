import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderContainer from '../components/HeaderContainer';
import NavBar from '../components/NavBar';

const Container = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 0 40px;
  text-align: center;
`;

const BasePage = ({ children }) => (
  <Container>
    <HeaderContainer />
    <NavBar />
    {children}
  </Container>
);

BasePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasePage;
