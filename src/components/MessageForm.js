import React, { Component } from 'react'

export default class MessageForm extends Component {

 state = {
      user: '',
      text: '',
    }
  

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addMessage(this.state)
    this.setState({
      user: '',
      text: ''
    })
  }

  render() {
    return (
      <>
      <form className="submit-message-form" onSubmit={this.handleSubmit}>
        <label>
          User:
          <input type="text" name="user" value={this.state.user} onChange={this.handleChange} />
        </label><br/>
        <label>
          Message:
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
  
    </>
    )
  }
}
