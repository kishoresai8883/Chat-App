import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './Styles.css'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { IconButton } from '@mui/material'
import MessageSelf from './MessageSelf'
import MessageOthers from './MessageOthers'

const ChatArea = () => {
  const lightTheme = useSelector((state) => state.themeKey);
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
      <div className={'chatArea-header' + (lightTheme ? "" : " dark")}>
        <p className={'con-icon' + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
        <div className='header-text'>
          <p className={'con-name' + (lightTheme ? "" : " dark")}>{props.name}</p>
          <p className={'con-timeStamp' + (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
        </div>
        <IconButton className={'icon' + (lightTheme ? "" : " dark")}>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className={'messages-container' + (lightTheme ? "" : " dark")}>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className={'text-input' + (lightTheme ? "" : " dark")}>
        <input placeholder='Type a Message' className={'search-input' + (lightTheme ? "" : " dark")}/>
        <IconButton className={'icon' + (lightTheme ? "" : " dark")}>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
