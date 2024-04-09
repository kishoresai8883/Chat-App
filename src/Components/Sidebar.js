import React, { useState, useEffect, useContext } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ConversationsItem from './ConversationsItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../Features/themeSlice'
import axios from 'axios';
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from './MainContainer';
import './Styles.css'

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const {refresh, setRefresh} = useContext(myContext);
  console.log("Context API : refresh : ", refresh);
  const [conversations, setConversations] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if (!userData) {
    console.log("User Not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    axios.get("http://localhost:8000/chat/", config).then((response) => {
      console.log("Data Refresh in Sidebar ", response.data);
      setConversations(response.data);
    });
  }, [refresh]);
  
  return (
    <div className='sidebar-container'>
      <div className={"sb-header" + ((lightTheme) ? "" : " dark")}>
        <div className='other-icons'>
        <IconButton onClick={() => {
          navigate("/app/welcome")
        }}>
            <AccountCircleIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>
        </IconButton>
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
        <IconButton onClick={() => {dispatch(toggleTheme());
        }}>
            {lightTheme && (<NightlightIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>)}
            {!lightTheme && (<LightModeIcon className={"icon" + ((lightTheme) ? "" : " dark")}/>)}
        </IconButton>
        <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + ((lightTheme) ? "" : " dark")}>
        <IconButton className={'icon' + (lightTheme ? "" : " dark")}>
            <SearchIcon/>
        </IconButton>
        <input placeholder='search' className={"search-input" + ((lightTheme) ? "" : " dark")}/>
      </div>
      <div className={"sb-conversations" + ((lightTheme) ? "" : " dark")}>
        {conversations.map((conversation, index) => {
          if(conversation.users.length === 1) {
            var chatName = "";
            if (conversation.isGroupChat) {
              chatName = conversation.chatName;
            } else {
              conversation.users.map((user) => {
                if (user._id != userData.data._id) {
                  chatName = user.name;
                }
              })
            }
          }
          if(conversation.latestMessage === undefined) {
            return (
              <div key={index}
                  onClick={() => {
                    console.log("Refresh fired from Sidebar");
                    setRefresh(!refresh);
                  }}
              >
                <div key={index}
                      className='conversation-container'
                      onClick={() => {
                        navigate("chat/" + conversation._id + "&" + conversation.users[1].name)
                      }}
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name[0]}
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name}
                  </p>

                  <p className="con-lastMessage">
                    No Messages here, Start a New Chat!!!
                  </p>
                </div>   
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "chat/" +
                      conversation._id +
                      "&" +
                      conversation.users[1].name
                  );
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name[0]}
                </p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name}
                </p>

                <p className="con-lastMessage">
                  {conversation.latestMessage.content}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}

export default Sidebar
