import React from 'react'
import Message from '../components/Message'

function MessageList(props){
  return (
  <div className='messages-div'>
    <h3> Latest Messages:</h3>
      <ul>
        {props.messages.map(message => <Message text={message.text} user={message.user} key={message.id} />)}
      </ul>
  </div>
  )
}

export default MessageList