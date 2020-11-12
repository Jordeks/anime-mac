import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { v4 as uuidv4 } from 'uuid';


export default class MessageContainer extends Component {

  state = {
    messages: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/messages')
      .then(response => response.json())
      .then(data => this.setState({messages: data }));
  }

  addMessage = (message) => {
    const newMessage = {...message, id: uuidv4()}
    this.setState({messages: [...this.state.messages, newMessage]})
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
