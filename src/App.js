import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/category/:categoryName" component={CategoryPage} />
    </div>
  </BrowserRouter>
);

export default App;
