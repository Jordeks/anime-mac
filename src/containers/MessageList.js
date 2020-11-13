import React from 'react'
import Message from '../components/Message'

function MessageList(props){
  console.log(props)
  return (
  <div className='messages-div'>
    <h3> Latest Messages:</h3>
      <ul className='message-list'>
        {props.messages.map(message => <Message text={message.text} username={message.username} key={message.id} />)}
      </ul>
  </div>
  )
}

export default MessageList