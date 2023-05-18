import React, { useContext } from 'react'
import Menu from '../Menu'
import Logo from '../Logo'
import Hamburger from '../Hamburger'
import css from "./style.module.css"
import Search from '../Search'




const Toolbar = (props) => {

 
  return (
    <div className={css.Toolbar}>
       <div className={css.Hamburger}>
       <Hamburger/>
       </div>
         
         <div className={css.Logo}>
         <Logo />
         </div>
          <div><Search onChangeValue={props.onChangeValue}/></div>
         <div className={css.Menu}>
         <Menu isSignedIn={props.isSignedIn} logout={props.logout}/>
         </div>
         
         
    </div>
  )
}

export default Toolbar;