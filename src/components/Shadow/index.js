import React, { useContext } from 'react'
import css from "./style.module.css"
import SidebarContext from '../Context/SidebarContext'

const Shadow = () => {
    const sideBarContext = useContext(SidebarContext)
  return (
     <div onClick={sideBarContext.closeSidebar}  className={sideBarContext.showSidebar ? css.Shadow : null}></div>
  )
}

export default Shadow