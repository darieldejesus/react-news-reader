import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.li`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  color: #696969;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  &.selected {
    border-bottom: 4px solid #ea4748;
  }
`;

const NavBarLink = ({ href, label }) => (
  <Container>
    <StyledNavLink exact to={href} activeClassName="selected">
      {label}.
    </StyledNavLink>
  </Container>
);

NavBarLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavBarLink;
