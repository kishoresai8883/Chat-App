import React, {useState} from 'react'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import './Styles.css'

const MainContainer = () => {
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
    <div className='main-container'>
        <Sidebar/>
        <Welcome/>
        { /*<ChatArea props={conversations[2]}/> */}
    </div>
  )
}

export default MainContainer
