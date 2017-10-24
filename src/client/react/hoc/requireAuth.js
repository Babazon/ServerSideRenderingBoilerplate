import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = (WrappedComponent) => {
  class AuthenticationProvider extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <Redirect to="/" />;
        default:
          return <WrappedComponent {...this.props} />;
      }
    }
  }
  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(AuthenticationProvider);
};

export default requireAuth;
