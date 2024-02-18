import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../Images/live-chat_512px.png'

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={'welcome-container' + (lightTheme ? "" : " dark")}>
      <img src={logo} className='welcome-logo' alt='Logo'/>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default Welcome
