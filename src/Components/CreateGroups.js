import React from 'react'
import { useSelector } from 'react-redux'
import DoneOutlineroundedIcon from '@mui/icons-material/DoneOutlineRounded'
import { IconButton } from '@mui/material'
import './Styles.css'

const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={'create-groups-container' + (lightTheme ? "" : " dark")}>
      <input className={'search-input' + (lightTheme ? "" : " dark")} placeholder='Enter Group Name'/>
      <IconButton className={'icon' + (lightTheme ? "" : " dark")}>
        <DoneOutlineroundedIcon/>
      </IconButton>
    </div>
  )
}

export default CreateGroups
