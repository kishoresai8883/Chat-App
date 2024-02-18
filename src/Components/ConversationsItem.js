import React from 'react'
import { useSelector } from 'react-redux'
import './Styles.css'
import { useNavigate } from 'react-router-dom'

const ConversationsItem = ({props}) => {
  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();
  return (
    <div className='conversation-container' onClick={() => navigate("chat")}>
      <p className='con-icon'>{props.name[0]}</p>
      <p className={'con-name' + (lightTheme ? "" : " dark")}>{props.name}</p>
      <p className='con-lastMessage'>{props.lastMessage}</p>
      <p className={'con-timeStamp' + (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationsItem
