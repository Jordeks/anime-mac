import React, { Component } from 'react'

export default class MessageForm extends Component {

  constructor(){
    super()
    this.state = {
      message: '',
      messages: [],
    }
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { message: this.state.message}
    let dataArray = this.state.messages.concat(formData)
    this.setState({
      message: '',
      messages: dataArray
    })
  }

  listOfSubmissions = () => {
    return this.state.messages.map(data => {
      return <div className='messages-div'>{data.message}</div>
    })
  }

  render() {
    return (
      <>
      <form className="submit-message-form" onSubmit={this.handleSubmit}>
        <textarea className='form-textarea'
              onChange={this.handleChange}
              value={this.state.message}
              placeholder="Type your message and click submit" />
        <input className='submit-btn' type="submit" value="Submit" />
      </form>
      {this.listOfSubmissions()}
    </>
    )
  }
}
