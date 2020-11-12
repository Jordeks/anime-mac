import React, { Component } from 'react'



export default class Message extends Component {
  render() {
    return (
      <div>
         <li><strong>{this.props.username}</strong>: {this.props.text}</li>
      </div>
    )
  }
}

