import React, { Component } from 'react'
import PostList from './PostList'
import MessageForm from './MessageForm'

export default class Message extends Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  // listOfPosts = () => {
  //   this.setState({
  //     posts: data.posts
  //   })
    // return this.state.posts.map(data => {

    //   console.log(data)
      // return <div>{data.post}</div>
  //   })
  // }

  render() {
    return (
      <div>
        {/* <PostForm listPosts={this.listOfPosts} /> */}
        <MessageForm />
        
        {/* <PostList posts={this.state.posts} /> */}
      </div>
    )
  }
}
