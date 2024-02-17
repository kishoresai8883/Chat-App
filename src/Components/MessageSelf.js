import React from 'react'
import './Styles.css'

const MessageSelf = () => {
  const props2 = { name: "You", message: "Hai, I'm a Fullstack Developer"}
  return (
    <div className='self-msg-container'>
      <div className='message-box'>
        <p>{props2.message}</p>
        <p className='self-timeStamp'>12:00am</p>
      </div>
    </div>
  )
}

export default MessageSelf
