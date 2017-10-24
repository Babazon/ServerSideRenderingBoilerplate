import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import axios from 'axios';
import Router from './client/router';
import renderer from './helpers/renderer';
import { configure as createStore } from './client/redux/store';
import reducer from './client/redux/reducers';
import buildAssets from '../webpack-assets.json';

const PORT = process.env.PORT || 3000;
const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
const HOST = process.env.HOST || `localhost:${PORT}`;
const PROXY_ROUTE = '/api';
const PUBLIC_DIR = 'public';

const app = express();

app.use(
  PROXY_ROUTE,
  proxy(BASE_API_URL, {
    proxyReqOptDecorator: (opts) => {
      /* eslint-disable */
      opts.headers['x-forwarded-host'] = HOST;
      /* eslint-enable */
      return opts;
    },
  }),
);

app.use(express.static(PUBLIC_DIR));

app.get('*', (request, response) => {
  const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: { cookie: request.get('cookie') || '' },
  });

  const store = createStore({}, reducer, axiosInstance);
  /* eslint-disable */

  const reactRouterConfigLoadDataPromises = matchRoutes(Router, request.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map(
      promise =>
        promise
          ? new Promise((resolve, reject) => {
              promise.then(resolve).catch(resolve);
            })
          : null,
    );
  /* eslint-enable */

  /* eslint-disable */
  Promise.all(reactRouterConfigLoadDataPromises).then(() => {
    const staticRouterContext = {};
    const html = renderer(request, store, buildAssets, staticRouterContext);
    if (staticRouterContext.url) return response.redirect(301, staticRouterContext.url);
    if (staticRouterContext.notFound) response.status(404);
    response.send(html);
  });
  /* eslint-enable */
});

app.listen(PORT, () => {
  console.log('Server listening at port: ', PORT);
});
