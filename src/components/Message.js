import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

export default class Message extends Component {

  constructor() {
    super()
    this.state = {
      messages: []
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
        
        {/* <MessageList posts={this.state.messages} /> */}
      </div>
    )
  }
}
