import React , {useContext}  from 'react'
import { NavLink } from 'react-router-dom';
import css from "./style.module.css";
import SidebarContext from '../Context/SidebarContext';



const Menuitem = (props) => {
 
  
  const sideBarContext = useContext(SidebarContext);

  
  return (
    <div  className={css.MenuItem} ><li><NavLink onClick={sideBarContext.closeSidebar}  style={({ isActive }) => isActive ? {background: "#740404"} : {}}  to={props.to}>{props.children}</NavLink></li></div>
  )
}

export default Menuitem;
