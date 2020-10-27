import React, { Component } from 'react'
import Home from './Home'

export default class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showHome: false,
    };
  }

  onButtonClick = () => {
    this.setState({
      showHome: true,
    });
  }

  render() {
    return (
      <div>
         <nav>
          <button id="home-btn" onClick={this.onButtonClick}>Home</button>
          <button id="posts-btn">Posts</button>
          {this.state.showHome ?
           <Home /> :
           null
        }
        </nav>
      </div>
    )
  }
}
