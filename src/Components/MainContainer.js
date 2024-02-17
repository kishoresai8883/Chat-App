import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import './Styles.css'
import CreateGroups from './CreateGroups'
import Users from './Users'
import Groups from './Groups'

const MainContainer = () => {
  return (
    <div className='main-container'>
        <Sidebar/>
        <Outlet/>
        {/* <CreateGroups/> */}
        {/* <Welcome/> */}
        {/* <Users/> */}
        {/* <Groups/> */}
        {/* { <ChatArea props={conversations[2]}/> } */}
    </div>
  )
}

export default MainContainer
