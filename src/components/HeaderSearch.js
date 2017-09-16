import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'react-icons/lib/md/search';

const SearchInput = styled.input`
  background-color: #f7f7f7;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  color: #848484;
  height: 30px;
  padding: 5px;
`;

const SearchButton = styled.button`
  background: red;
  border: 0;
  color: #fff;
  font-size: 16px;
  height: 30px;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderSearch = () => (
  <div>
    <SearchInput type="text" placeholder="Search." />
    <SearchButton><SearchIcon /></SearchButton>
  </div>
);

export default HeaderSearch;
