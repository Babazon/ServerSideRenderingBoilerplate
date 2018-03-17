import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './react/components/Header';
import { fetchAuth } from './redux/actions';
import './styles/styles.css';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

export default {
  loadData: ({ dispatch }) => dispatch(fetchAuth()),
  component: App,
};
