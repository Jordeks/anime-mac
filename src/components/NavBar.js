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
          <button className="nav-btn" onClick={this.onButtonClick}>Home</button>
          <button className="nav-btn" onClick={this.onPostClick}>Message</button>
          {this.state.showHome ? <Home /> : null }
          {this.state.showPosts ? <PostContainer /> : null }
        </nav>
      </div>
    )
  }
}
