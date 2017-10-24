/* eslint-disable */
import React from 'react';
/* eslint-enable */
import HomePage from '../react/pages/HomePage';
import PublicApiPage from '../react/pages/PublicApiPage';
import ProtectedPage from '../react/pages/ProtectedPage';
import App from '../App';
import NotFoundPage from '../react/pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...PublicApiPage,
        path: '/users',
      },
      {
        ...ProtectedPage,
        path: '/posts',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
