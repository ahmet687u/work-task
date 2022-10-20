import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import f1rf1r from 'f1rf1r';

import { store } from './redux/store';
import { Provider } from 'react-redux';

/**
 * Import style file
 */
import './styles/main.scss'
import './styles/vendors/webova.min.css'
import 'f1rf1r/dist/css/fırfır.min.css'

const fırfır = new f1rf1r.F1rf1r()
fırfır.init()


fırfır.notificationSettings = {
  duration: 4000
}

fırfır.modalSettings = {
  header: "Smart Maple",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);