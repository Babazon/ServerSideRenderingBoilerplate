import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ staticContext = {} }) => {
  /* eslint-disable  */
  staticContext.notFound = true;
  /* eslint-enable */
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
        <meta property="og:title" content="Not Found" />
      </Helmet>
      <h1 className="center-align">404, That page does not exist. </h1>
    </div>
  );
};
export default {
  component: NotFoundPage,
};
