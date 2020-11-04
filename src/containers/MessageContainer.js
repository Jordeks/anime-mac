import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { v4 as uuidv4 } from 'uuid';


export default class MessageContainer extends Component {

  state = {
    messages: [
      {
        id: 1,
        user: "cowboybeeboop",
        text: "Cowboy BeeBop is the best. Fight me."
      },
      {
        id: 2,
        user: "avatar4eva",
        text: "Rewatching avatar for the millionth time"
      },
      {
        id: 3,
        user: "sw0rdart0nlyn",
        text: "hey wanna buy some sw0rd art"
      }
    ]
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
