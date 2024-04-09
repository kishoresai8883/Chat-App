import React, {createContext, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import './Styles.css'

export const myContext = createContext();

const MainContainer = () => {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);
  return (
    <div className={"main-container" + (lightTheme? "" : " dark")}>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
    </div>
  )
}

export default MainContainer
