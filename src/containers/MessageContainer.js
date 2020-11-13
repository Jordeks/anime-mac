import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'


export default class MessageContainer extends Component {

  state = {
    messages: []
  }
///makeing change to test git
  componentDidMount(){
    fetch('http://localhost:3000/messages')
      .then(response => response.json())
      .then(data => this.setState({messages: data }));
  }

  addMessage = (message) => {
    fetch(`http://localhost:3000/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    .then(response => response.json())
    .then(newMessage => this.setState({messages: [...this.state.messages, newMessage]}))
  }

  render() {
    return (
      <>
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </>
    )
  }
}
