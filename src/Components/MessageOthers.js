import React from 'react'
import './Styles.css'

const MessageOthers = () => {
  const props1 = { name: "Kishore", message: "Hai, I'm a Fullstack Developer"}
  return (
    <div className='others-msg-container'>
      <div className='conversation-container'>
        <p className='con-icon'>{props1.name[0]}</p>
        <div className='other-text-content'>
            <p className='con-name'>{props1.name}</p>
            <p className='con-lastMessage'>{props1.message}</p>
            <p className='self-timeStamp'>12:00am</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOthers
