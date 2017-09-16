import React from 'react';
import styled from 'styled-components';

import NavBarLink from './NavBarLink';

const NavBarContainer = styled.nav`
    display: block;
    width: 100%;
    border-bottom: 0.05rem solid #ea4748;
    padding-bottom: 0.20rem;
    margin: 1rem 0 0;
`;

const LinkContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const NavBar = () => {
  const categories = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Business',
      href: '/category/business',
    },
    {
      label: 'Entertainment',
      href: '/category/entertaiment',
    },
    {
      label: 'Gaming',
      href: '/category/gaming',
    },
    {
      label: 'General',
      href: '/category/general',
    },
    {
      label: 'Music',
      href: '/category/music',
    },
    {
      label: 'Politics',
      href: '/category/politics',
    },
    {
      label: 'Science and nature',
      href: '/category/science-and-nature',
    },
    {
      label: 'Sport',
      href: '/category/sport',
    },
    {
      label: 'Technology',
      href: '/category/technology',
    },
  ];

  return (
    <NavBarContainer>
      <LinkContainer>
        {categories.map(category => (
          <NavBarLink key={category.href} {...category} />
        ))}
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
