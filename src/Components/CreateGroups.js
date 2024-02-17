import React from 'react'
import DoneOutlineroundedIcon from '@mui/icons-material/DoneOutlineRounded'
import { IconButton } from '@mui/material'

const CreateGroups = () => {
  return (
    <div className='create-groups-container'>
      <input className='search-input' placeholder='Enter Group Name'/>
      <IconButton>
        <DoneOutlineroundedIcon/>
      </IconButton>
    </div>
  )
}

export default CreateGroups
