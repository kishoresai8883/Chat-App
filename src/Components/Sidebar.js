import React, {useState} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ConversationsItem from './ConversationsItem'
import { useNavigate } from 'react-router-dom'

import './Styles.css'

const Sidebar = () => {
  const navigate = useNavigate();
  const [lightTheme, setLightTheme] = useState(true)
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
  
  return (
    <div className='sidebar-container'>
      <div className={"sb-header" + ((lightTheme) ? "" : " dark")}>
        <div>
        <IconButton>
            <AccountCircleIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>
        </IconButton>
        </div>
        <div>
        <IconButton onClick={() => {
          navigate("users")
        }}>
            <PersonAddIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>
        </IconButton>
        <IconButton onClick={() => {
          navigate("groups")
        }}>
            <GroupAddIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>
        </IconButton>
        <IconButton onClick={() => {
          navigate("create-groups")
        }}>
            <AddCircleIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>
        </IconButton>
        <IconButton onClick={() => {setLightTheme((prevValue) => {
          return !prevValue;
        });
        }}>
            {lightTheme && (<NightlightIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>)}
            {!lightTheme && (<LightModeIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>)}
        </IconButton>
        </div>
      </div>
      <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
        <IconButton>
            <SearchIcon/>
        </IconButton>
        <input placeholder='search' className={"search-input" + ((lightTheme) ? "" : " dark")}/>
      </div>
      <div className={"sb-conversations" + ((lightTheme) ? "" : " dark")}>
        {conversations.map((conversation) => {
          return <ConversationsItem props={conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
