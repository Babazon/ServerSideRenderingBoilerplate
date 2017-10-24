import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  renderHead = () => (
    <Helmet>
      <title>Server Side Rendering with React and Node</title>
      <meta property="og:title" content="Homepage" />
    </Helmet>
  );
  /* eslint-disable */
  render() {
    return (
      <div className="center-align" style={{ marginTop: '100px' }}>
        {this.renderHead()}
        <h3>Server Side Rendering Boilerplate with React and Node</h3>
        <h5>React Fiber, Redux, React Router, Express, Webpack 3, Cache Busting, Code Splitting</h5>
        <p>This is the Homepage at root route</p>
        <p>
          PublicApiPage shows how you can fetch from a public api on server or client side, and
          render the result
        </p>
        <p>
          ProtectedPage shows how you can fetch from an authentication-requiring api on server or
          client side, and render the result
        </p>
      </div>
    );
  }
}
/* eslint-enable */

export default { component: HomePage };
