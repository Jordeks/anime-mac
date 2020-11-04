import React, { Component } from 'react'



export default class Message extends Component {
  render() {
    return (
      <div>
         <li>{this.props.user}: {this.props.text}</li>
      </div>
    )
  }
}

