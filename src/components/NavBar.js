import React, { Component } from 'react'
import Home from './Home'
import PostContainer from '../containers/PostContainer'

export default class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showHome: false,
      showPosts: false,
    };
  }

  onButtonClick = () => {
    this.setState({
      showHome: true,
      showPosts: false,
    });
  }

  onPostClick = () => {
    this.setState({
      showPosts: true,
      showHome: false,
    });
  }

  render() {
    return (
      <div>
         <nav>
          <button id="home-btn" onClick={this.onButtonClick}>Home</button>
          <button id="posts-btn" onClick={this.onPostClick}>Posts</button>
          {this.state.showHome ? <Home /> : null }
          {this.state.showPosts ? <PostContainer /> : null }
        </nav>
      </div>
    )
  }
}
