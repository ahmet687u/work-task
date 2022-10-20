import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './redux/store';
import { Provider } from 'react-redux';

/**
 * Import style file
 */
import './styles/main.scss'
import './styles/vendors/webova.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);