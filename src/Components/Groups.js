import React from 'react'
import { useSelector } from 'react-redux'
import './Styles.css'
import logo from "../Images/live-chat_512px.png"
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{opacity: 0, scale: 0 }}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0}}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className='list-container'>
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
      <div lassName='ug-list'>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
          className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
          className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
          className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
          className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
        className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
          className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.01}} 
          whileTap={{scale: 0.98}}
          className={'list-item' + (lightTheme ? "" : " dark")}>
            <p className={'con-icon' + (lightTheme ? "" : " dark")}>R</p>
            <p className={'con-name item-name' + (lightTheme ? "" : " dark")}>Ravi</p>
        </motion.div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Groups
