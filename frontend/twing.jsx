import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './compenents/root'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store
  ReactDOM.render(<Root />, root);
});