import React from 'react'
import './Styles.css'
import logo from "../Images/live-chat_512px.png"
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

const Groups = () => {
  return (
    <div className='list-container'>
      <div className='ug-header'>
        <img src={logo} alt='online' style={{height: "32px", width: "32px"}}/>
        <p className='ug-title'>User Groups</p>
      </div>
      <div className='sb-search'>
        <IconButton>
            <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-input'/>
      </div>
      <div className='ug-list'>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
        <div className='list-item'>
            <p className='con-icon'>R</p>
            <p className='con-name item-name'>Ravi</p>
        </div>
      </div>
    </div>
  )
}

export default Groups
