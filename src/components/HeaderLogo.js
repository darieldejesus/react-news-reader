import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  color: #616161;
  font-size: 23px;
`;

const LogoDot = styled.span`
  color: red;
  font-size: 30px;
  margin-left: 2px;
`;

const HeaderLogo = () => (
  <div>
    <Logo>REACT NEWS<LogoDot>.</LogoDot></Logo>
  </div>
);

export default HeaderLogo;
