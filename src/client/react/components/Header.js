import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FETCH_AUTH } from '../../redux/actions/types';

class Header extends Component {
  authButton = () =>
    (this.props.auth ? <a onClick={this.logout}>Logout</a> : <a onClick={this.login}>Login</a>);
  // if it starts with PROXY_ROUTE '/api', renderer server will act as proxy and make the request instead
  // a goes to google page, Link is for inside Router
  /* eslint-disable */
  login = () => {
    this.props.dispatch({ type: FETCH_AUTH, payload: true });
  };
  logout = () => {
    this.props.dispatch({ type: FETCH_AUTH, payload: false });
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo left" to="/">
            Home
          </Link>
          <ul className="right">
            <li>
              <Link to="/users">Public Api Page</Link>
            </li>
            <li>
              <Link to="/posts">Protected Page</Link>
            </li>
            <li>{this.authButton()}</li>
          </ul>
        </div>
      </nav>
    );
  }
  /* eslint-enable */
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
