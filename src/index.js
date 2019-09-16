import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { Provider } from "react-redux";
import store from "./store";

store.run()

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
