import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../redux/actions';

class PublicApiPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  renderUsers = () => {
    const { users } = this.props;
    return users.map(user => <li key={user.id}>{user.name}</li>);
  };

  renderHead = () => (
    <Helmet>
      <title>{`${this.props.users.length} users loaded`}</title>
      <meta property="og:title" content="Users" />
    </Helmet>
  );
  /* eslint-disable */

  render() {
    return (
      <div className="center-align" style={{ marginTop: '100px' }}>
        {this.renderHead()}
        <h5>
          This is the public api page. Things rendered on this page are fetched from a public api,
          and the request is made on the server side before the redux store state being passed down
          to the client. The below is simply a list of random users from a placeholder REST api.
        </h5>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

/* eslint-enable */

const mapStateToProps = state => ({
  users: state.users,
});

export default {
  component: connect(mapStateToProps)(PublicApiPage),
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
};
