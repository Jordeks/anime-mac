import React from 'react'
import Message from '../components/Message'

function MessageList(props){
  console.log(props)
  return (
  <div className='messages'>
    <h3 className='heading-secondary'> Latest Messages:</h3>
      <ul className='messages__list'>
        {props.messages.map(message => <Message text={message.text} username={message.username} key={message.id} />)}
      </ul>
  </div>
  )
}

export default MessageList