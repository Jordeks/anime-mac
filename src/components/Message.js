import React, { Component } from 'react'



export default class Message extends Component {
  render() {
    return (
      <div>
         <li><strong>{this.props.user}</strong>: {this.props.text}</li>
      </div>
    )
  }
}

