import React, {useState} from 'react'
import './Styles.css'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { IconButton } from '@mui/material'
import MessageSelf from './MessageSelf'
import MessageOthers from './MessageOthers'

const ChatArea = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Last Msg #1",
      timeStamp: "today",
    },
    {
      name: "Jest2",
      lastMessage: "Last Msg #2",
      timeStamp: "today",
    },
    {
      name: "Rest3",
      lastMessage: "Last Msg #3",
      timeStamp: "today",
    },
  ])

  const props = conversations[0]
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='con-icon'>{props.name[0]}</p>
        <div className='header-text'>
          <p className='con-name'>{props.name}</p>
          <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='messages-container'>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className='text-input'>
        <input placeholder='Type a Message' className='search-input'/>
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
