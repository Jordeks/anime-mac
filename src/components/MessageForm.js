import React, { Component } from 'react'

export default class MessageForm extends Component {

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
      return <div className='messages-div'>{data.post}</div>
    })
  }

  render() {
    return (
      <>
      <form className="submit-message-form" onSubmit={this.handleSubmit}>
        <textarea className='form-textarea'
              onChange={this.handleChange}
              value={this.state.post}
              placeholder="Type your message and click submit" />
        <input className='submit-btn' type="submit" value="Submit" />
      </form>
      {this.listOfSubmissions()}
    </>
    )
  }
}
