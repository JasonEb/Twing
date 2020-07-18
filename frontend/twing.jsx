import React from 'react';
import ReactDOM from 'react-dom';

//Util
import configureStore from './store/store';

import Root from './compenents/root'

//test
import * as messagesSelector from './selectors/messageSelectors'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store
  window.messagesSelector = messagesSelector
  ReactDOM.render(<Root store={store} />, root);
});