import React from 'react';
import styled from 'styled-components';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderContainer = () => (
  <Container id="header">
    <HeaderLogo />
    <HeaderSearch />
  </Container>
);

export default HeaderContainer;
