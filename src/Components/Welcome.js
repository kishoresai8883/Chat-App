import React from 'react'
import logo from '../Images/live-chat_512px.png'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <img src={logo} className='welcome-logo' alt='Logo'/>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default Welcome
