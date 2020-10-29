import React, { Component } from 'react'

export default class PostForm extends Component {

  constructor(){
    super()
    this.state = {
      post: '',
      posts: [],
    }
  }

  handleChange = event => {
    this.setState({
      post: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { post: this.state.post}
    let dataArray = this.state.posts.concat(formData)
    this.setState({
      post: '',
      posts: dataArray
    })
  }

  listOfSubmissions = () => {
    return this.state.posts.map(data => {
      return <div>{data.post}</div>
    })
  }

  render() {
    return (
      <>
      <form className="submit-post-form" onSubmit={this.handleSubmit}>
        <textarea
              onChange={this.handleChange}
              value={this.state.post}
              placeholder="Type your message and click submit" />
        <input type="submit" value="Submit" />
      </form>
      {this.listOfSubmissions()}
    </>
    )
  }
}
