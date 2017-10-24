import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import requireAuth from '../hoc/requireAuth';

class ProtectedPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  renderPosts = () => {
    const { posts } = this.props;
    return posts.map(post => <li className="center-align" key={post.id}>{post.title}</li>);
  };

  render() {
    return (
      <div>
        <h4 className="center-align">Protected Page for Posts</h4>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const loadData = store => store.dispatch(fetchPosts());

export default {
  component: connect(mapStateToProps)(requireAuth(ProtectedPage)),
  loadData,
};
