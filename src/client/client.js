import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Router from './router';
import reducer from './redux/reducers';
import { configure as configureStore } from './redux/store';

const PROXY_ROUTE = '/api';
const axiosInstance = axios.create({
  baseURL: PROXY_ROUTE,
});

const store = configureStore(window.INITIAL_STATE, reducer, axiosInstance);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Router)}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.getElementById('app'));
