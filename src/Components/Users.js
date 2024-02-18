import React from 'react'
import { useSelector } from 'react-redux'
import './Styles.css'
import logo from "../Images/live-chat_512px.png"
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

const Users = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className='list-container'>
      <div className={'ug-header' + (lightTheme ? "" : " dark")}>
        <img src={logo} alt='online' style={{height: "32px", width: "32px"}}/>
        <p className={'ug-title' + (lightTheme ? "" : " dark")}>Online Users</p>
      </div>
      <div className={'sb-search' + (lightTheme ? "" : " dark")}>
        <IconButton className={'icon' + (lightTheme ? "" : " dark")}>
            <SearchIcon/>
        </IconButton>
        <input placeholder='search' className={'search-input' + (lightTheme ? "" : " dark")}/>
      </div>
      <div className='ug-list'>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>M</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Mahesh</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>A</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ajay</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>M</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Mahesh</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>A</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ajay</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>M</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Mahesh</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>A</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ajay</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>K</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Kishore</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>S</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Sai</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>C</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Chinnu</p>
        </div>
      </div>
    </div>
  )
}

export default Users
