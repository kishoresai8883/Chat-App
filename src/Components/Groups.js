import React from 'react'
import { useSelector } from 'react-redux'
import './Styles.css'
import logo from "../Images/live-chat_512px.png"
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='list-container'>
      <div className={'ug-header' + (lightTheme ? "" : " dark")}>
        <img src={logo} alt='online' style={{height: "32px", width: "32px"}}/>
        <p className={'ug-title' + (lightTheme ? "" : " dark")}>User Groups</p>
      </div>
      <div className={'sb-search' + (lightTheme ? "" : " dark")}>
        <IconButton>
            <SearchIcon/>
        </IconButton>
        <input placeholder='search' className={'search-input' + (lightTheme ? "" : " dark")}/>
      </div>
      <div className='ug-list'>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
        <div className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </div>
      </div>
    </div>
  )
}

export default Groups
