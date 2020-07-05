import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import {register} from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
, document.getElementById('root'));
register();
