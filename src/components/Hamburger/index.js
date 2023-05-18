import React , {useContext} from 'react'
import styles from "./style.module.css"
import SidebarContext from '../Context/SidebarContext';

const Hamburger = () => {

  const sideBarContext = useContext(SidebarContext);
  return (
    <div onClick={sideBarContext.openSidebar} className={styles['hamburger-menu']}>
    <span className={styles.line}></span>
    <span className={styles.line}></span>
    <span className={styles.line}></span>
  </div>
  )
}

export default Hamburger