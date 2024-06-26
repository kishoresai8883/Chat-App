import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from "../Images/live-chat_512px.png"
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import RefreshIcon from "@mui/icons-material/Refresh";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";
import "./Styles.css";

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const { refresh, setRefresh } = useContext(myContext);
  const dispatch = useDispatch();
  const [groups, SetGroups] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if (!userData) {
    console.log("User Not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get("http://localhost:8000/chat/fetchGroups", config)
      .then((response) => {
        console.log("Group Data from API ", response.data);
        SetGroups(response.data);
      });
  }, [refresh]);

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
        <img src={logo} alt='online' style={{height: "32px", width: "32px", marginLeft: "10px"}}/>
        <p className={'ug-title' + (lightTheme ? "" : " dark")}>Available Groups</p>
        <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
      </div>
      <div className={'sb-search' + (lightTheme ? "" : " dark")}>
        <IconButton>
            <SearchIcon/>
        </IconButton>
        <input placeholder='search' className={'search-input' + (lightTheme ? "" : " dark")}/>
      </div>
      <div lassName='ug-list'>
      {groups.map((group, index) => {
        return (
        <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={"list-item" + (lightTheme ? "" : " dark")}
        key={index}
        onClick={() => {
          const config = {
            headers: {
              Authorization: `Bearer ${userData.data.token}`,
            },
          };
          axios.put("http://localhost:8000/chat/addSelfToGroup",
        {
          chatId: group._id,
          userId: userData.data._id,
        },
          config
        )
          dispatch(refreshSidebarFun());
        }}
        >
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>{group.chatName[0]}</p>
        <p className={"con-name item-name" + (lightTheme ? "" : " dark")}>
          {group.chatName}
        </p>
        </motion.div>
      );
    })};
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Groups
