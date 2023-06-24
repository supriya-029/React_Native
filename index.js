import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Page2 from './Page2';

render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/page2" component={Page2} />
  </Router>,
  document.getElementById('root')
);
